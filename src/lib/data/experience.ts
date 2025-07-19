import { OrganizationLogos } from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'verizon',
		company: 'Verizon',
		description:
			'<ul><li><strong>Teams:</strong> Worked on the Network and Security team, collaborating with cross-functional teams including DevOps and Analytics teams to deliver enterprise-level solutions. Worked closely with senior engineers and architects to implement best practices and ensure code quality.</li><li><strong>Test Automation Impact:</strong> Designed and executed a test automation framework for a distributed analytics environment utilizing Playwright, resulting in over 200 E2E tests across UI, APIs, and data visualizations, leading to a 90% reduction in manual regression testing and improved deployment confidence.</li><li><strong>Security & Compliance Impact:</strong> Managed the end-to-end vulnerability management lifecycle for critical projects, protecting applications from numerous threats. Ensured continuous ISO 27001 compliance by integrating SAST (Fortify), SCA (BlackDuck), and container security (Sysdig) scanning, reducing security vulnerabilities by 85%.</li><li><strong>AI/ML Impact:</strong> Developed an AI utility using Python, LangChain, and AWS to parse and summarize complex Terraform plans, significantly improving clarity and reducing review time for non-technical operations teams by 70%, enabling faster infrastructure deployments.</li></ul>',
		contract: ContractType.Apprenticeship,
		type: 'Software Engineer',
		location: 'Basking Ridge, NJ',
		period: { from: new Date(2024, 7), to: new Date(2025, 7) },
		skills: getSkills('ts', 'angular', 'docker', 'aws', 'python', 'langchain', 'terraform'),
		name: 'Thrive Software Engineering Apprentice',
		color: '#EE0000',
		links: [{ to: 'https://www.verizon.com/', label: 'Verizon', type: 'link' }],
		logo: OrganizationLogos.Verizon,
		shortDescription: ''
	}
	// {
	// 	slug: 'rymax',
	// 	company: 'Rymax Inc.',
	// 	description:
	// 		'<ul><li>Led a team of 15 associates, achieving 20% productivity increase and improved operational efficiency</li><li>Streamlined onboarding process, resulting in 15% efficiency improvement and 10% higher order accuracy</li><li>Managed warehouse operations including forklift operations and order fulfillment with 24-hour turnaround</li></ul>',
	// 	contract: ContractType.FullTime,
	// 	type: 'Logistics',
	// 	location: 'Pine Brook, NJ',
	// 	period: { from: new Date(2022, 0), to: new Date(2023, 0) },
	// 	skills: getSkills(),
	// 	name: 'Warehouse Associate',
	// 	color: '#717378',
	// 	links: [{ to: 'https://www.rymaxinc.com/', label: 'Rymax Inc.', type: 'link' }],
	// 	logo: OrganizationLogos.Rymax,
	// 	shortDescription: ''
	// },
	// {
	// 	slug: 'amazon-icqa',
	// 	company: 'Amazon',
	// 	description:
	// 		'<ul><li>Reduced onboarding time by 25% as ICQA Ambassador while maintaining performance standards</li><li>Achieved 99% accuracy in inventory verification and quality assurance checks</li><li>Improved productivity by 15% through data analysis and discrepancy resolution</li></ul>',
	// 	contract: ContractType.FullTime,
	// 	type: 'Logistics',
	// 	location: 'Oklahoma City, OK',
	// 	period: { from: new Date(2019, 8), to: new Date(2021, 11) },
	// 	skills: getSkills(),
	// 	name: 'Inventory Control Quality Assurance Associate',
	// 	color: '#FF9900',
	// 	links: [],
	// 	logo: OrganizationLogos.Amazon,
	// 	shortDescription: ''
	// },
	// {
	// 	slug: 'amazon-sort',
	// 	company: 'Amazon',
	// 	description:
	// 		'<ul><li>Processed 2,500+ packages daily with zero reported incidents</li><li>Increased workplace productivity by 10% through process improvements</li><li>Managed daily loading of 50+ pallets while ensuring safe transport</li></ul>',
	// 	contract: ContractType.FullTime,
	// 	type: 'Logistics',
	// 	location: 'Oklahoma City, OK',
	// 	period: { from: new Date(2018, 4), to: new Date(2019, 8) },
	// 	skills: getSkills(),
	// 	name: 'Sortation Associate',
	// 	color: '#FF9900',
	// 	links: [],
	// 	logo: OrganizationLogos.Amazon,
	// 	shortDescription: ''
	// },
	// {
	// 	slug: 'usaf',
	// 	company: 'United States Air Force',
	// 	description:
	// 		'<ul><li>Led security operations across multiple international deployments (Afghanistan, Kuwait, UAE)</li><li>Reduced security incidents by 15-25% through proactive measures and rapid response</li><li>Coordinated with multinational forces and local authorities to enhance base security</li><li>Managed emergency response with under 5-minute response time</li></ul>',
	// 	contract: ContractType.FullTime,
	// 	type: 'Law Enforcement',
	// 	location: 'Tinker AFB, OK',
	// 	period: { from: new Date(2011, 5), to: new Date(2015, 8) },
	// 	skills: getSkills(),
	// 	name: 'Security Forces',
	// 	color: '#0437F2',
	// 	links: [],
	// 	logo: OrganizationLogos.USAF,
	// 	shortDescription: ''
	// }
];

export const title = 'Experience';
