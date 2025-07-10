import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const key = 'theme';

const updateLocalStorage = (value: boolean) => {
	if (browser) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

// Initialize theme store with the correct initial value
const getInitialTheme = (): boolean => {
	if (browser) {
		const fromStore = localStorage.getItem(key);
		if (fromStore !== null) {
			return JSON.parse(fromStore);
		}
		// Fall back to system preference
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	}
	return false; // Default to light theme for SSR
};

export const theme = writable<boolean>(getInitialTheme());

export const toggleTheme = (value?: boolean) =>
	theme.update((it) => {
		const $v = typeof value === 'boolean' ? value : !it;

		updateLocalStorage($v);

		document.querySelector(':root')?.setAttribute('data-theme', $v ? 'dark' : 'light');

		return $v;
	});

export const onHydrated = () => {
	// Remove the no-flash class after hydration
	if (browser) {
		document.documentElement.classList.remove('no-flash');
	}

	// Ensure theme is properly set (in case the initial script didn't run)
	const rootElement = document.querySelector(':root');
	const currentDataTheme = rootElement?.getAttribute('data-theme');

	// Get the current theme value from localStorage to ensure consistency
	const fromStore = localStorage.getItem(key);
	const currentTheme = fromStore
		? JSON.parse(fromStore)
		: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	const expectedTheme = currentTheme ? 'dark' : 'light';

	if (currentDataTheme !== expectedTheme) {
		rootElement?.setAttribute('data-theme', expectedTheme);
	}

	// Listen for system theme changes (only if user hasn't set a manual preference)
	if (browser && !fromStore) {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', (e) => {
			const newTheme = e.matches;
			theme.set(newTheme);
			rootElement?.setAttribute('data-theme', newTheme ? 'dark' : 'light');
		});
	}
};
