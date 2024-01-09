<script lang="ts">
	import { HOME, TITLE_SUFFIX, getPlatformIcon } from '$lib/params';
	import MY_SKILLS from '$lib/skills.params';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import Title from '$lib/components/Title/Title.svelte';

	const { description, firstName, lastName, title, links, skills } = HOME;

	const isEmail = (email: string): boolean => {
		const regex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && regex.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>

<div
	class="col self-center flex-1 md:flex-row md:self-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<Title classes="md:text-left ">{firstName} {lastName},</Title>

		<p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>

		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''} ${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatformIcon(link.platform)} color={'var(--accent-text'} size={'24px'}
					></Icon>
				</a>
			{/each}
		</div>
	</div>

	<Carrousel items={skills ?? MY_SKILLS} />
</div>
