const test = require('ava');
const darkMode = require('./');

test(t => {
	darkMode.isDark((err, dark) => {
		t.ifError(err);
		darkMode.toggle(err => {
			t.ifError(err);
			darkMode.isDark((err, dark2) => {
				t.ifError(err);
				t.not(dark, dark2);
				t.end();
			});
		});
	});
});
