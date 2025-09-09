import process from 'node:process';
import darkMode from './index.js';

console.log('Dark Mode Watcher Example');
console.log('=========================\n');

// Check initial state
const initialState = await darkMode.isEnabled();
console.log(`Initial state: ${initialState ? '🌙 Dark Mode' : '☀️ Light Mode'}\n`);

console.log('Starting to watch for dark mode changes...');
console.log('Try changing your appearance in System Settings > Appearance');
console.log('Press Ctrl+C to stop\n');

// Start watching for changes
const watcher = darkMode.watch(isDark => {
	const timestamp = new Date().toLocaleTimeString();
	console.log(`[${timestamp}] Theme changed to: ${isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
	console.log('\n\nStopping watcher...');
	watcher.stop();
	console.log('Goodbye! 👋');
	process.exit(0);
});

// Keep the process running
process.stdin.resume();
