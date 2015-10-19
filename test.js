const test = require('ava');
const darkMode = require('./');

test(async t => {
	const dark = await darkMode.isDark();
	await darkMode.toggle();
	t.not(dark, await darkMode.isDark());
});
