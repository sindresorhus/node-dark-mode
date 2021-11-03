import test from 'ava';
import darkMode from './index.js';

let isDarkInitially;

test.before(async () => {
	isDarkInitially = await darkMode.isEnabled();
});

test.after(async () => {
	await darkMode.toggle(isDarkInitially);
});

test('main', async t => {
	const dark = await darkMode.isEnabled();
	await darkMode.toggle();
	t.not(dark, await darkMode.isEnabled());

	await darkMode.disable();
	t.false(await darkMode.isEnabled());

	await darkMode.enable();
	t.true(await darkMode.isEnabled());

	await darkMode.toggle(false);
	t.false(await darkMode.isEnabled());
});
