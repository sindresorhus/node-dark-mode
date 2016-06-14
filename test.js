const test = require('ava');
const m = require('./');

test(async t => {
	const dark = await m.isDark();
	await m.toggle();
	t.not(dark, await m.isDark());
});
