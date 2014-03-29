'use strict';

var annotate = require('symphony-fnannotate');

var invokeFn = function (fn, args, self) {
	var value;
	switch (self ? -1 : args.length) {
	case 0:
		value = fn();
		break;
	case 1:
		value = fn(args[0]);
		break;
	case 2:
		value = fn(args[0], args[1]);
		break;
	case 3:
		value = fn(args[0], args[1], args[2]);
		break;
	case 4:
		value = fn(args[0], args[1], args[2], args[3]);
		break;
	case 5:
		value = fn(args[0], args[1], args[2], args[3], args[4]);
		break;
	case 6:
		value = fn(args[0], args[1], args[2], args[3], args[4], args[5]);
		break;
	case 7:
		value = fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
		break;
	case 8:
		value = fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
		break;
	case 9:
		value = fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
		break;
	case 10:
		value = fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
		break;
	default:
		value = fn.apply(self, args);
		break;
	}

	return value;
};

module.exports = function invoke(getService) {
	return function invokeInner(fn, self, locals) {
		var args = [],
			key,
			$inject = annotate(fn),
			fnIsArray =  Array.isArray(fn),
			length = fnIsArray ? fn.length - 1		: $inject.length,
			argArr = fnIsArray ? fn.slice(0, -1)	: $inject;

		fn = fnIsArray ? fn[length] : fn;

		var i = length;
		while (i--) {
			key = argArr[i];

			if (typeof key !== 'string') {
				throw new Error('Incorrect injection token! Expected service name as string, got ' + key);
			}
			
			args.unshift(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key));
		}

		return invokeFn(fn, args, self);
	};
};