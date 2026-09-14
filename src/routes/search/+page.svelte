<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { title } from '@data/search';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import * as experience from '@data/experience';
	import * as projects from '@data/projects';
	import * as skills from '@data/skills';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import type { Icon, Item, Skill } from '$lib/types';

	type Item = {
		icon: Icon;
		name: string;
		data: Item | Skill;
		to: string;
	};

	let query = '';
	let result: Array<Item> = [];

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);

		query = searchParams.get('q') ?? '';
	});

	$: {
		result = [];

		// filter
		result.push(
			...projects.items
				.filter((item) => query && item.name.toLowerCase().includes(query))
				.map<Item>((data) => ({
					data,
					icon: 'i-carbon-cube',
					name: data.name,
					to: `projects/${data.slug}`
				}))
		);

		result.push(
			...skills.items
				.filter((item) => query && item.name.toLowerCase().includes(query))
				.map<Item>((data) => ({
					data,
					icon: 'i-carbon-software-resource-cluster',
					name: data.name,
					to: `skills/${data.slug}`
				}))
		);

		result.push(
			...experience.items
				.filter(
					(item) =>
						query &&
						(item.name.toLowerCase().includes(query) || item.company.toLowerCase().includes(query))
				)
				.map<Item>((data) => ({
					data,
					icon: 'i-carbon-development',
					name: `${data.name} @ ${data.company}`,
					to: `experience/${data.slug}`
				}))
		);
	}
</script>

<SearchPage {title} on:search={(e) => (query = e.detail.search)}>
	<div class="flex flex-col items-stretch gap-10 p-2" />
	{#if !query}
		<div class="flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]">
			<UIcon icon="i-carbon-search-locate-mirror" classes="text-2em" />
			<span> Try typing something... </span>
		</div>
	{:else}
		<div>
			{#if result.length === 0}
				<div class="flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]">
					<UIcon icon="i-carbon-cube" classes="text-2em" />
					<span> Oops! nothing to show ! </span>
				</div>
			{:else}
				<div class="flex flex-row flex-wrap gap-1">
					{#each result as item}
						<Chip href={`${base}/${item.to}`} classes="flex flex-row items-center gap-2">
							<UIcon icon={item.icon} />
							<span>{item.name}</span>
						</Chip>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</SearchPage>
