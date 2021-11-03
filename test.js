import test from 'ava';
import darkMode from './index.js';

let isDarkInitially;

test.before(async () => {
	isDarkInitially = await darkMode.isDark();
});

test.after(async () => {
	await darkMode.toggle(isDarkInitially);
});

test('main', async t => {
	const dark = await darkMode.isDark();
	await darkMode.toggle();
	t.not(dark, await darkMode.isDark());

	await darkMode.disable();
	t.false(await darkMode.isDark());

	await darkMode.enable();
	t.true(await darkMode.isDark());

	await darkMode.toggle(false);
	t.false(await darkMode.isDark());
});
