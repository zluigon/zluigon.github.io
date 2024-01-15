import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCE: Array<Experience> = [
	{
		slug: 'rymax',
		company: 'Rymax Inc.',
		description:
			'<ul><li>Successfully managed and directed a team of 15 associates, achieving a 20% increase in productivity and meeting operational goals through effective organization and workflow</li><li>Trained and onboarded newly hired associates in packing and shipping processes, resulting in a 15% improvement in efficiency and a 10% increase in order fulfillment accuracy</li><li>Operated forklifts and order pickers to execute customer orders, ensuring timely fulfillment of requests with an average turnaround time of 24 hours</li></ul>',
		contract: ContractType.FullTime,
		type: 'Logistics',
		location: 'Pine Brook, NJ',
		period: { from: new Date(2022, 0), to: new Date(2023, 0) },
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
		description:
			'<ul><li>Developed and trained new hires as an ICQA Ambassador, contributing to a 25% reduction in onboarding time and ensuring consistent standards of performance were met across the team</li><li>Conducted thorough inventory Q/A checks throughout the primary fulfillment warehouse in Oklahoma City, verifying virtual and physical inventory with a 99% accuracy rate and identifying and resolving defects promptly</li><li>Analyzed inventory data and resolved discrepancies as an ICQA Problem Solver, utilizing mobile computer units to investigate and maintain accuracy in orders, shipments, and product quality, resulting in a 15% increase in overall productivity and improved customer satisfaction</li></ul>',
		contract: ContractType.FullTime,
		type: 'Logistics',
		location: 'Oklahoma City, OK',
		period: { from: new Date(2019, 8), to: new Date(2021, 11) },
		skills: getSkills(),
		name: 'Inventory Control Quality Assurance Associate',
		color: '#ffffff',
		links: [],
		logo: Assets.Amazon,
		shortDescription: ''
	},
	{
		slug: 'amazon-sort',
		company: 'Amazon',
		description:
			'<ul><li>Sorted an average of 2,500 incoming packages daily from fulfillment centers based on size, shape, and weight,ensuring accurate sorting and preparing shipments for timely delivery to customers</li><li>Coordinated with associates daily, implemented process improvements that increased productivity by 10%, and optimized performance and efficiency in the workplace</li><li>Safely loaded and secured an average of 50 pallets of customer packages onto shipping trucks daily, guaranteeing that all items were properly packaged and transported to their destination with zero reported incidents</li></ul>',
		contract: ContractType.FullTime,
		type: 'Logistics',
		location: 'Oklahoma City, OK',
		period: { from: new Date(2018, 4), to: new Date(2019, 8) },
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
		description:
			"<ul><li>Collaborated with local, state, and federal law enforcement agencies as a Security Forces(SF) member in concurrent,reciprocal, and exclusive jurisdictions, ensuring the safety and security of individuals and properties within the designated areas for four years</li><li>Responded to and effectively managed security incidents, in-flight emergencies, and vehicular mishaps as a first responder, maintaining a rapid response time of under 5 minutes and mitigating risks to personnel and property</li><li>Provided area and convoy security during overseas assignments in Afghanistan, Kuwait, and the United Arab Emirates(UAE), contributing to successful battlefield operations and ensuring the safety of personnel and equipment in high-threat environments</li><li>Utilized advanced management software and state-of-the-art communications equipment to facilitate seamless operations between joint forces, resulting in efficient coordination and communication for mission success</li></ul><h3>Ali Al Salem Air Base, Kuwait : February 2012 - November 2012</h3><ul><li>Spearheaded 50 security patrols and access control measures, enhancing the base's security posture and readiness</li><li>Established strong partnerships with multinational forces and local authorities, strengthening base security and threat deterrence</li><li>Contributed to a 15% improvement in base security during the deployment through innovative security strategies and training</li><li>Provided vital assistance and maintained safety standards during emergencies and accidents, ensuring the well-being of personnel and resources</li></ul><h3>Bagram Air Field, Afghanistan : March 2012 - October 2012</h3><ul><li>Conducted and led over 20 security patrols and surveillance missions, ensuring the safety and well-being of over 500 personnel and assets</li><li>Collaborated with a diverse team and local military units to enforce security protocols and contribute to the overall mission success</li><li>Achieved a 25% reduction in security incidents during the deployment through proactive security measures and rapid response</li></ul><h3>Al Dhafra Air Base, UAE : May 2013 - December 2013</h3><ul><li>Led a team in conducting over 15 security patrols and surveillance missions, safeguarding the base and its personnel from potential threats</li><li>Collaborated seamlessly with international and interagency partners, facilitating a secure environment and mission success</li><li>Significantly contributed to a 10% reduction in security incidents during the deployment, enhancing overall safety</li><li>Demonstrated exceptional first responder capabilities by swiftly addressing security incidents, in-flight emergencies,and vehicular mishaps, ensuring the rapid protection of personnel and property</li></ul>",
		contract: ContractType.FullTime,
		type: 'Law Enforcement',
		location: 'Tinker AFB, OK',
		period: { from: new Date(2011, 5), to: new Date(2015, 8) },
		skills: getSkills(),
		name: 'Security Forces',
		color: '#ffffff',
		links: [],
		logo: Assets.USAF,
		shortDescription: ''
	}
];

export default MY_EXPERIENCE;
