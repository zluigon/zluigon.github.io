<script lang="ts">
	import { page } from '$app/stores';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { items } from '@data/navbar';
	import * as HOME from '@data/home';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	$: currentRoute = $page.url.pathname;

	let expanded = false;

	const toggleExpanded = (v?: boolean) => {
		if (typeof v === 'undefined') {
			expanded = !expanded;
		} else {
			expanded = v;
		}
	};
</script>

<div class="nav-menu">
	<nav class="container flex flex-row items-center text-sm">
		<a
			href={`${base}/`}
			class="nav-menu-left decoration-none w-auto md:w-150px lg:w-auto row flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"
		>
			<Icon icon="carbon:code" width="2em" height="2em" />
			<span
				class="ml-2 text-md font-bold hidden md:inline overflow-hidden whitespace-nowrap text-ellipsis"
				>{HOME.firstName} {HOME.lastName}
			</span>
		</a>
		<div class="flex-1 block overflow-hidden sm:hidden whitespace-nowrap text-ellipsis text-center">
			{HOME.firstName}
			{HOME.lastName}
		</div>
		<div class="flex-row flex-1 self-center h-full justify-center hidden md:flex">
			{#each items as item}
				<a href={`${base}${item.to}`} class="nav-menu-item !text-[var(--secondary-text)]">
					<Icon icon={item.icon} width="1.2em" height="1.2em" />
					<span class="nav-menu-item-label">{item.title}</span>
				</a>
			{/each}
		</div>
		<div
			class="row h-full justify-center items-stretch m-l-auto md:m-l-0 w-auto md:w-150px gap-1 text-1.15em"
		>
			<div class="row hidden md:flex">
				<a
					href={`${base}/search`}
					class="text-inherit col-center self-stretch px-2 hover:bg-[color:var(--main-hover)]"
				>
					<Icon icon="carbon:search" width="1.2em" height="1.2em" />
				</a>
				<button
					class="bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"
					on:click={() => toggleTheme()}
				>
					{#if $theme}
						<Icon icon="carbon:moon" width="1.2em" height="1.2em" />
					{:else}
						<Icon icon="carbon:sun" width="1.2em" height="1.2em" />
					{/if}
				</button>
			</div>
			<div class="col-center md:hidden h-full hover:bg-[var(--main-hover)] cursor-pointer">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class={`nav-bar-mobile-btn col-center ${expanded ? 'nav-bar-mobile-btn-expanded' : ''}`}
					on:keydown
					on:keyup
					on:click={() => toggleExpanded()}
				/>
			</div>
		</div>
	</nav>
	<div class={`nav-menu-mobile ${expanded ? 'nav-menu-mobile-open' : ''} md:hidden`}>
		<div class="flex-col flex-1 self-center h-full justify-center m-t-7">
			{#each items as item}
				<a
					href={`${base}${item.to}`}
					class="nav-menu-item !text-[var(--secondary-text)] gap-5"
					on:click={() => toggleExpanded(false)}
				>
					<Icon icon={item.icon} width="1.2em" height="1.2em" />
					<span class="">{item.title}</span>
				</a>
			{/each}
		</div>
		<div class="col gap-2 m-t-7">
			<a
				href={`${base}/search`}
				class="text-inherit decoration-none px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)]"
				on:click={() => toggleExpanded(false)}
			>
				<Icon icon="carbon:search" width="1.2em" height="1.2em" />
				<span>Search</span>
			</a>
			<button
				class="bg-transparent text-1em border-none cursor-pointer px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"
				on:click={() => toggleTheme()}
			>
				{#if $theme}
					<Icon icon="carbon:moon" width="1.2em" height="1.2em" />
					<span>Dark Theme</span>
				{:else}
					<Icon icon="carbon:sun" width="1.2em" height="1.2em" />
					<span>Light Theme</span>
				{/if}
			</button>
		</div>
	</div>
</div>
