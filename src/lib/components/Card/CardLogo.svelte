<script lang="ts">
	import Icon from '@iconify/svelte';
	import { hasIcon, getIconName } from '$lib/utils/iconify';

	export let src: string;
	export let alt: string;
	export let size = 50;
	export let radius = '15px';
	export let classes = '';

	// Check if we have an Iconify icon for this technology
	$: hasIconifyIcon = hasIcon(alt);

	// Get the icon name for Iconify
	$: iconName = hasIconifyIcon ? getIconName(alt) : '';
</script>

{#if hasIconifyIcon}
	<!-- Use Iconify icon -->
	<Icon icon={iconName} width={size} height={size} class={`${classes}`} />
{:else}
	<!-- Fallback to existing logo system -->
	<img
		class={`rounded-${radius} ${classes} aspect-square`}
		{src}
		{alt}
		height={size}
		width={size}
	/>
{/if}
