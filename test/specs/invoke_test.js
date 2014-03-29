'use strict';

var should = require('should');

var fninvoke = require('../coverage/src/main'),
	mockGetServie = function (_services) {
		return function (key) {
			return _services[key];
		};
	};

describe('#fninvoke', function () {
	it('should handle zero function param', function (done) {
		var o = {},
			invoker = fninvoke(mockGetServie(o));

		invoker(function () {
			done();
		});
	});
	it('should handle one function param', function (done) {
		var o = {
				a: Math.random()
			},
			invoker = fninvoke(mockGetServie(o));

		invoker(function (a) {
			a.should.be.equal(o.a);
			done();
		});
	});
	it('should handle two function param', function (done) {
		var o = {
				a: Math.random(),
				b: Math.random()
			},
			invoker = fninvoke(mockGetServie(o));

		invoker(function (a, b) {
			a.should.be.equal(o.a);
			b.should.be.equal(o.b);
			done();
		});
	});
	it('should handle three function param', function (done) {
		var o = {
				a: Math.random(),
				b: Math.random(),
				c: Math.random()
			},
			invoker = fninvoke(mockGetServie(o));

		invoker(function (a, b, c) {
			a.should.be.equal(o.a);
			b.should.be.equal(o.b);
			c.should.be.equal(o.c);
			done();
		});
	});
	it('should handle four function param', function (done) {
		var o = {
				a: Math.random(),
				b: Math.random(),
				c: Math.random(),
				d: Math.random()
			},
			invoker = fninvoke(mockGetServie(o));

		invoker(function (a, b, c, d) {
			a.should.be.equal(o.a);
			b.should.be.equal(o.b);
			c.should.be.equal(o.c);
			d.should.be.equal(o.d);
			done();
		});
	});
	it('should handle five function param', function (done) {
		var o = {
				a: Math.random(),
				b: Math.random(),
				c: Math.random(),
				d: Math.random(),
				e: Math.random()
			},
			invoker = fninvoke(mockGetServie(o));

		invoker(function (a, b, c, d, e) {
			a.should.be.equal(o.a);
			b.should.be.equal(o.b);
			c.should.be.equal(o.c);
			d.should.be.equal(o.d);
			e.should.be.equal(o.e);
			done();
		});
	});
	it('should handle six function param', function (done) {
		var o = {
				a: Math.random(),
				b: Math.random(),
				c: Math.random(),
				d: Math.random(),
				e: Math.random(),
				f: Math.random()
			},
			invoker = fninvoke(mockGetServie(o));

		invoker(function (a, b, c, d, e, f) {
			a.should.be.equal(o.a);
			b.should.be.equal(o.b);
			c.should.be.equal(o.c);
			d.should.be.equal(o.d);
			e.should.be.equal(o.e);
			f.should.be.equal(o.f);
			done();
		});
	});
	it('should handle seven function param', function (done) {
		var o = {
				a: Math.random(),
				b: Math.random(),
				c: Math.random(),
				d: Math.random(),
				e: Math.random(),
				f: Math.random(),
				g: Math.random()
			},
			invoker = fninvoke(mockGetServie(o));

		invoker(function (a, b, c, d, e, f, g) {
			a.should.be.equal(o.a);
			b.should.be.equal(o.b);
			c.should.be.equal(o.c);
			d.should.be.equal(o.d);
			e.should.be.equal(o.e);
			f.should.be.equal(o.f);
			g.should.be.equal(o.g);
			done();
		});
	});
	it('should handle eight function param', function (done) {
		var o = {
				a: Math.random(),
				b: Math.random(),
				c: Math.random(),
				d: Math.random(),
				e: Math.random(),
				f: Math.random(),
				g: Math.random(),
				h: Math.random()
			},
			invoker = fninvoke(mockGetServie(o));

		invoker(function (a, b, c, d, e, f, g, h) {
			a.should.be.equal(o.a);
			b.should.be.equal(o.b);
			c.should.be.equal(o.c);
			d.should.be.equal(o.d);
			e.should.be.equal(o.e);
			f.should.be.equal(o.f);
			g.should.be.equal(o.g);
			h.should.be.equal(o.h);
			done();
		});
	});
	it('should handle nine function param', function (done) {
		var o = {
				a: Math.random(),
				b: Math.random(),
				c: Math.random(),
				d: Math.random(),
				e: Math.random(),
				f: Math.random(),
				g: Math.random(),
				h: Math.random(),
				i: Math.random()
			},
			invoker = fninvoke(mockGetServie(o));

		invoker(function (a, b, c, d, e, f, g, h, i) {
			a.should.be.equal(o.a);
			b.should.be.equal(o.b);
			c.should.be.equal(o.c);
			d.should.be.equal(o.d);
			e.should.be.equal(o.e);
			f.should.be.equal(o.f);
			g.should.be.equal(o.g);
			h.should.be.equal(o.h);
			i.should.be.equal(o.i);
			done();
		});
	});
	it('should handle ten function param', function (done) {
		var o = {
				a: Math.random(),
				b: Math.random(),
				c: Math.random(),
				d: Math.random(),
				e: Math.random(),
				f: Math.random(),
				g: Math.random(),
				h: Math.random(),
				i: Math.random(),
				j: Math.random()
			},
			invoker = fninvoke(mockGetServie(o));

		invoker(function (a, b, c, d, e, f, g, h, i, j) {
			a.should.be.equal(o.a);
			b.should.be.equal(o.b);
			c.should.be.equal(o.c);
			d.should.be.equal(o.d);
			e.should.be.equal(o.e);
			f.should.be.equal(o.f);
			g.should.be.equal(o.g);
			h.should.be.equal(o.h);
			i.should.be.equal(o.i);
			j.should.be.equal(o.j);
			done();
		});
	});
	it('should handle tventyfive function param', function (done) {
		var alfabet = 'abcdefghijklmnopqrstuvxyz',
			obj = {};

		alfabet.split('').forEach(function (key) {
			obj[key] = Math.random();
		});

		var invoker = fninvoke(mockGetServie(obj));

		invoker(function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, x, y, z) {
			var args = arguments;
			alfabet.split('').forEach(function (key, index) {
				args[index].should.be.equal(obj[key]);
			});
			done();
		});
	});
	it('should handle diffrent ordering of the function params', function () {
		var o = {
				a: Math.random(),
				b: Math.random(),
				c: Math.random()
			},
			invoker = fninvoke(mockGetServie(o)),
			cnt = 0;

		invoker(function (a, b, c) {
			a.should.be.equal(o.a);
			b.should.be.equal(o.b);
			c.should.be.equal(o.c);
			cnt += 1;
		});

		invoker(function (b, a, c) {
			a.should.be.equal(o.a);
			b.should.be.equal(o.b);
			c.should.be.equal(o.c);
			cnt += 1;
		});

		invoker(function (c, b, a) {
			a.should.be.equal(o.a);
			b.should.be.equal(o.b);
			c.should.be.equal(o.c);
			cnt += 1;
		});

		invoker(function (a, c, b) {
			a.should.be.equal(o.a);
			b.should.be.equal(o.b);
			c.should.be.equal(o.c);
			cnt += 1;
		});

		invoker(function (b, c, a) {
			a.should.be.equal(o.a);
			b.should.be.equal(o.b);
			c.should.be.equal(o.c);
			cnt += 1;
		});

		cnt.should.be.equal(5);
	});
	it('should handle array notation', function (done) {
		var o = {
				a: Math.random()
			},
			invoker = fninvoke(mockGetServie(o));

		invoker(['a', function (a) {
			a.should.be.equal(o.a);
			done();
		}]);
	});
	it('should throw an error when a non string is the injection array', function () {
		(function () {
			var o = {
					a: Math.random()
				},
				invoker = fninvoke(mockGetServie(o));

			invoker([1, function (a) {
				a.should.be.equal(o.a);
				
			}]);
		}).should.throw('Incorrect injection token! Expected service name as string, got 1');
	});
	it('should inject local object keys in injector', function (done) {
		var o = {
				a: Math.random()
			},
			invoker = fninvoke(mockGetServie(o));

		invoker(function (µ) {
			µ.should.be.equal('fubar');
			done();
		}, null, {
			µ: 'fubar'
		});
	});

	it('should use function.apply when a scope object is provided', function (done) {
		//Same test as above, but uses diffrent code path in code logic. Because 100% code coverage is nice.
		var o = {
				a: Math.random()
			},
			invoker = fninvoke(mockGetServie(o));

		invoker(function (µ) {
			µ.should.be.equal('fubar');
			done();
		}, {}, {
			µ: 'fubar'
		});
	});
});