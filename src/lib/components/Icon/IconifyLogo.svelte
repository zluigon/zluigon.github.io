<script lang="ts">
	import Icon from '@iconify/svelte';
	import { getIconName } from '$lib/utils/iconify';

	export let name: string;
	export let size = 24;
	export let classes = '';
	export let inverted = false;
	export let grayscale = true;
	export let href: string | undefined = undefined;

	// Get the icon name from the utility function
	$: iconName = getIconName(name);

	// Apply theme-based styling
	$: iconClasses = `${classes} ${grayscale ? 'grayscale-65 hover:grayscale-0' : ''} ${
		inverted ? 'invert-100' : ''
	}`;
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	class={`iconify-logo row-center relative text-inherit decoration-none p-10px m-r-5px m-b-5px border-1px border-solid border-[var(--border)] hover:border-[var(--border-hover)] rounded-10px hover:z-5 ${iconClasses}`}
	data-help={name}
>
	<Icon icon={iconName} width={size} height={size} />
</svelte:element>

<style lang="scss">
	.iconify-logo {
		&:hover {
			border-color: var(--border-hover);

			&:after {
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
				z-index: 10;
			}
		}
	}
</style>
