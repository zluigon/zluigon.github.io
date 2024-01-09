import MY_EXPERIENCE from '$lib/experience.params';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const experience = MY_EXPERIENCE.find((item) => {
			return item.slug === params.slug;
		});

		return { experience };
	}
}
