<script lang="ts">
	import { getMonthName } from '$lib/utils/helpers';
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import type { Project } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	export let project: Project;
	$: from = `${getMonthName(project.period.from.getMonth())} ${project.period.from.getFullYear()}`;
	$: to = project.period.to
		? `${getMonthName(project.period.to.getMonth())} ${project.period.to.getFullYear()}`
		: 'now';
</script>

<Card color={project.color} href={`${base}/projects/${project.slug}`}>
	<CardLogo alt={project.name} src={getAssetURL(project.logo)} size={40} radius={'0'} />
	<div class="m-t-20px row justify-between items-center">
		<CardTitle title={project.name} />
		<div class="row">
			{#each project.links as link}
				<CardLink label={link.label ?? ''} to={link.to} type={link.type} />
			{/each}
		</div>
	</div>
	<CardDivider />
	<div
		class="col m-b-5px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"
	>
		<div class="row items-center gap-2">
			<UIcon icon="i-carbon-assembly-cluster" classes="text-1.25em" />
			<p>{project.type}</p>
		</div>
		<CardDivider />
		<!-- <p>{period}</p> -->
		<!-- <CardDivider /> -->
	</div>
	<div class="col sm:h-100px md:h-120px">
		<p class="text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-20px flex-1">
			{project.shortDescription}
		</p>
	</div>
	<div class="row justify-between text-0.8em font-400">
		<Chip>{from}</Chip>
		{#if from !== to}
			<Chip>{to}</Chip>
		{/if}
	</div>
	<CardDivider />
	<div class="row flex-wrap">
		{#each project.skills as tech}
			<ChipIcon logo={getAssetURL(tech.logo)} name={tech.name} />
		{/each}
	</div>
</Card>
