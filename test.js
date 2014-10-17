'use strict';
var test = require('ava');
var darkMode = require('./');

test(function (t) {
	t.plan(4);

	darkMode.isDark(function (err, dark) {
		t.assert(!err, err);
		darkMode.toggle(function (err) {
			t.assert(!err, err);
			darkMode.isDark(function (err, dark2) {
				t.assert(!err, err);
				t.assert(dark !== dark2);
			});
		});
	});
});
