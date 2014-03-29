'use strict';

var annotate = require('symphony-fnannotate');

module.exports = function invoke(getService) {
	return function invokeInner(fn, self, locals) {
		var args = [],
			fnIsArray =  Array.isArray(fn),
			$inject = annotate(fn),
			key,
			length = fnIsArray ? fn.length - 1		: $inject.length,
			argArr = fnIsArray ? fn.slice(0, -1)	: $inject;

		for (var i = 0; i < length; i++) {
			key = argArr[i];

			if (typeof key !== 'string') {
				throw new Error('Incorrect injection token! Expected service name as string, got ' + key);
			}
			
			args.push(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key));
		}

		if (fnIsArray) {
			fn = fn[length];
		}

		switch (self ? -1 : args.length) {
		case 0:
			return fn();
		case 1:
			return fn(args[0]);
		case 2:
			return fn(args[0], args[1]);
		case 3:
			return fn(args[0], args[1], args[2]);
		case 4:
			return fn(args[0], args[1], args[2], args[3]);
		case 5:
			return fn(args[0], args[1], args[2], args[3], args[4]);
		case 6:
			return fn(args[0], args[1], args[2], args[3], args[4], args[5]);
		case 7:
			return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
		case 8:
			return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
		case 9:
			return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
		case 10:
			return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
		default:
			return fn.apply(self, args);
		}
	};
};