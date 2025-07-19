import { OrganizationLogos } from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		name: 'Multiverse',
		degree: 'Applied Full Stack Software Development',
		description: '',
		location: 'Remote',
		logo: OrganizationLogos.Multiverse,
		organization: 'Multiverse',
		period: { from: new Date(2024, 7), to: new Date(2025, 6) },
		shortDescription: '12-month apprenticeship program',
		slug: 'multiverse',
		subjects: ['Full Stack Development', 'Software Engineering', 'Agile Methodologies', 'DevOps'],
		color: '#324ea8'
	},
	{
		name: 'Codeup',
		degree: 'Certificate of Completion: Web Development',
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
