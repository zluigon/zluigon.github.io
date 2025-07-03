<script lang="ts">
	import Icon from '@iconify/svelte';
	import { theme } from '$lib/stores/theme';
	import { hasIcon, getIconName } from '$lib/utils/iconify';

	export let name = '';
	export let logo = ''; // Keep for backward compatibility
	export let inverted = false;
	export let grayscale = true;

	export let href: string | undefined = undefined;

	// Check if we have an Iconify icon for this technology
	$: hasIconifyIcon = hasIcon(name);

	// Get the icon name for Iconify
	$: iconName = hasIconifyIcon ? getIconName(name) : '';
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	class={`chip-icon row-center relative text-inherit decoration-none p-10px m-r-5px m-b-5px border-1px border-solid border-[var(--border)] hover:border-[var(--border-hover)] rounded-10px hover:z-5 ${
		grayscale ? 'grayscale-65 hover:grayscale-0' : ''
	}`}
	data-help={name}
>
	{#if $$slots.default}
		<slot />
	{:else if hasIconifyIcon}
		<!-- Use Iconify icon -->
		<Icon icon={iconName} width="24" height="24" class={inverted ? 'invert-100' : ''} />
	{:else}
		<!-- Fallback to existing logo system -->
		<img
			class={`w-24px h-24px ${inverted ? 'invert-100' : ''}`}
			class:chip-icon-logo-inverted={$theme && inverted}
			src={logo}
			alt={name}
		/>
	{/if}
</svelte:element>

<style lang="scss">
	.chip-icon {
		&:hover {
			border-color: var(--border-hover);

			&:hover:after {
				content: attr(data-help);
				display: inline-block;
				position: absolute;
				width: max-content;
				background-color: var(--secondary);
				padding: 5px 10px;
				left: 10px;
				top: calc(100% + 0px);
				border: 1px solid var(--border);
				border-radius: 15px;
			}
		}

		&-logo {
			height: 15px;
			width: 15px;

			&-inverted {
				filter: invert(100);
			}
		}
	}
</style>
