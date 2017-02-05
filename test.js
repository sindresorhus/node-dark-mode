import test from 'ava';
import m from '.';

let isDarkInitially;

test.before(async () => {
	isDarkInitially = await m.isDark();
});

test.after(async () => {
	await m.toggle(isDarkInitially);
});

test(async t => {
	const dark = await m.isDark();
	await m.toggle();
	t.not(dark, await m.isDark());

	await m.disable();
	t.false(await m.isDark());

	await m.enable();
	t.true(await m.isDark());

	await m.toggle(false);
	t.false(await m.isDark());
});
