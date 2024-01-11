import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCE: Array<Experience> = [
	{
		slug: 'rymax',
		company: 'Rymax Inc.',
		description: '',
		contract: ContractType.FullTime,
		type: '',
		location: 'Pine Brook, NJ',
		period: { from: new Date(2022, 1, 21), to: new Date(2023, 0, 9) },
		skills: getSkills(),
		name: 'Warehouse Associate',
		color: '#ffffff',
		links: [{ to: 'https://www.rymaxinc.com/', label: 'Rymax Inc.', type: 'link' }],
		logo: Assets.Rymax,
		shortDescription: ''
	},
	{
		slug: 'amazon-icqa',
		company: 'Amazon',
		description: '',
		contract: ContractType.FullTime,
		type: '',
		location: 'Oklahoma City, OK',
		period: { from: new Date() },
		skills: getSkills(),
		name: 'ICQA Associate',
		color: '#ffffff',
		links: [],
		logo: Assets.Amazon,
		shortDescription: ''
	},
	{
		slug: 'amazon-sort',
		company: 'Amazon',
		description: '',
		contract: ContractType.FullTime,
		type: '',
		location: 'Oklahoma City, OK',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills(),
		name: 'Sortation Associate',
		color: '#ffffff',
		links: [],
		logo: Assets.Amazon,
		shortDescription: ''
	},
	{
		slug: 'usaf',
		company: 'United States Air Force',
		description: '<ul><li>Security Forces</li><li>Law Enforcement</li><li>Combat Arms</li></ul',
		contract: ContractType.FullTime,
		type: 'Law Enforcement',
		location: 'Tinker AFB, OK',
		period: { from: new Date(2011, 5, 28), to: new Date(2015, 8, 30) },
		skills: getSkills(),
		name: 'Security Forces',
		color: '#ffffff',
		links: [],
		logo: Assets.USAF,
		shortDescription: 'short description'
	}
];

export default MY_EXPERIENCE;
