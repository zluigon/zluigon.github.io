import { OrganizationLogos } from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		name: 'Multiverse',
		degree: '',
		description: '',
		location: 'Remote',
		logo: OrganizationLogos.Multiverse,
		organization: 'Multiverse',
		period: { from: new Date(2024, 7) },
		shortDescription: '',
		slug: 'multiverse',
		subjects: [],
		color: '#324ea8'
	},
	{
		name: 'Codeup',
		degree: 'Certificate of Completion',
		description: '',
		location: 'San Antonio, TX',
		logo: OrganizationLogos.Codeup,
		organization: 'Codeup',
		period: { from: new Date(2023, 0, 17), to: new Date(2023, 5, 16) },
		shortDescription: '',
		slug: 'codeup',
		subjects: [],
		color: '#adff2f'
	}
];

export const title = 'Education';
