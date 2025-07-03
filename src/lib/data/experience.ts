import { OrganizationLogos } from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'rymax',
		company: 'Rymax Inc.',
		description:
			'<ul><li>Led a team of 15 associates, achieving 20% productivity increase and improved operational efficiency</li><li>Streamlined onboarding process, resulting in 15% efficiency improvement and 10% higher order accuracy</li><li>Managed warehouse operations including forklift operations and order fulfillment with 24-hour turnaround</li></ul>',
		contract: ContractType.FullTime,
		type: 'Logistics',
		location: 'Pine Brook, NJ',
		period: { from: new Date(2022, 0), to: new Date(2023, 0) },
		skills: getSkills('js', 'ts', 'react', 'nodejs', 'firebase', 'tailwind', 'docker', 'aws'),
		name: 'Warehouse Associate',
		color: '#717378',
		links: [{ to: 'https://www.rymaxinc.com/', label: 'Rymax Inc.', type: 'link' }],
		logo: OrganizationLogos.Rymax,
		shortDescription: 'Led warehouse operations, improving productivity and efficiency.'
	},
	{
		slug: 'amazon-icqa',
		company: 'Amazon',
		description:
			'<ul><li>Reduced onboarding time by 25% as ICQA Ambassador while maintaining performance standards</li><li>Achieved 99% accuracy in inventory verification and quality assurance checks</li><li>Improved productivity by 15% through data analysis and discrepancy resolution</li></ul>',
		contract: ContractType.FullTime,
		type: 'Logistics',
		location: 'Oklahoma City, OK',
		period: { from: new Date(2019, 8), to: new Date(2021, 11) },
		skills: getSkills(),
		name: 'Inventory Control Quality Assurance Associate',
		color: '#FF9900',
		links: [],
		logo: OrganizationLogos.Amazon,
		shortDescription: ''
	},
	{
		slug: 'amazon-sort',
		company: 'Amazon',
		description:
			'<ul><li>Processed 2,500+ packages daily with zero reported incidents</li><li>Increased workplace productivity by 10% through process improvements</li><li>Managed daily loading of 50+ pallets while ensuring safe transport</li></ul>',
		contract: ContractType.FullTime,
		type: 'Logistics',
		location: 'Oklahoma City, OK',
		period: { from: new Date(2018, 4), to: new Date(2019, 8) },
		skills: getSkills(),
		name: 'Sortation Associate',
		color: '#FF9900',
		links: [],
		logo: OrganizationLogos.Amazon,
		shortDescription: ''
	},
	{
		slug: 'usaf',
		company: 'United States Air Force',
		description:
			'<ul><li>Led security operations across multiple international deployments (Afghanistan, Kuwait, UAE)</li><li>Reduced security incidents by 15-25% through proactive measures and rapid response</li><li>Coordinated with multinational forces and local authorities to enhance base security</li><li>Managed emergency response with under 5-minute response time</li></ul>',
		contract: ContractType.FullTime,
		type: 'Law Enforcement',
		location: 'Tinker AFB, OK',
		period: { from: new Date(2011, 5), to: new Date(2015, 8) },
		skills: getSkills(),
		name: 'Security Forces',
		color: '#0437F2',
		links: [],
		logo: OrganizationLogos.USAF,
		shortDescription: ''
	}
];

export const title = 'Experience';
