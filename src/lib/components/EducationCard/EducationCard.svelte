<script lang="ts">
	import Card from '../Card/Card.svelte';
	import Chip from '../Chip/Chip.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import type { Education } from '$lib/types';
	import { getMonthName } from '$lib/utils/helpers';

	export let education: Education;

	const from = `${getMonthName(
		education.period.from.getMonth()
	)} ${education.period.from.getFullYear()}`;

	const to = education.period.to
		? `${getMonthName(education.period.to.getMonth())} ${education.period.to.getFullYear()}`
		: 'Present';

	const period = `${from} - ${to}`;
</script>

<Card color={education.color}>
	<div class="flex-1 col gap-2 items-stretch">
		<img
			src={getAssetURL(education.logo)}
			alt={education.organization}
			height="75"
			width="128"
			class="mb-5"
		/>
		<div class="text-[1.3em]">{education.degree}</div>
		<div>{education.organization}</div>
		<div class="text-[var(--accent-text)] text-[0.9em] font-200 mb-2">
			{education.location} · {period}
		</div>
		<div class="row flex-wrap gap-1">
			{#each education.subjects as subject}
				<Chip>{subject}</Chip>
			{/each}
		</div>
	</div>
</Card>
