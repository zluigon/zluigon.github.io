import { OrganizationLogos } from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
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
