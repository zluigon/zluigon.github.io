import { SkillLogos } from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'languages' }),
	defineSkillCategory({ name: 'Frontend Development', slug: 'frontend' }),
	defineSkillCategory({ name: 'Backend Development', slug: 'backend' }),
	defineSkillCategory({ name: 'Databases', slug: 'databases' }),
	defineSkillCategory({ name: 'Infrastructure & Tools', slug: 'infrastructure' }),
	defineSkillCategory({ name: 'Others', slug: 'others' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category) as SkillCategory<S>;
	}

	return out;
};

export const items = [
	// Programming Languages
	defineSkill({
		slug: 'js',
		name: 'JavaScript',
		logo: SkillLogos.JavaScript,
		description: 'High-level, multi-paradigm programming language for web development.',
		color: '#F7DF1E',
		category: 'languages'
	}),
	defineSkill({
		slug: 'ts',
		name: 'TypeScript',
		logo: SkillLogos.TypeScript,
		description: 'Typed superset of JavaScript that compiles to plain JavaScript.',
		color: '#3178C6',
		category: 'languages'
	}),
	defineSkill({
		slug: 'java',
		name: 'Java',
		logo: SkillLogos.Java,
		description: 'Object-oriented programming language for enterprise applications.',
		color: '#ED8B00',
		category: 'languages'
	}),
	defineSkill({
		slug: 'python',
		name: 'Python',
		logo: SkillLogos.Python,
		description: 'High-level programming language for general-purpose programming.',
		color: '#3776AB',
		category: 'languages'
	}),
	defineSkill({
		slug: 'go',
		name: 'Go',
		logo: SkillLogos.Go,
		description: 'General-purpose programming language.',
		color: '#00ADD8',
		category: 'languages'
	}),
	defineSkill({
		slug: 'c',
		name: 'C',
		logo: SkillLogos.C,
		description: 'General-purpose programming language.',
		color: '#A8B9CC',
		category: 'languages'
	}),

	// Frontend Development
	defineSkill({
		slug: 'svelte',
		name: 'Svelte',
		logo: SkillLogos.Svelte,
		description: 'Front-end compiler for building reactive user interfaces.',
		color: '#FF3E00',
		category: 'frontend'
	}),
	defineSkill({
		slug: 'react',
		name: 'React',
		logo: SkillLogos.ReactJs,
		description: 'JavaScript library for building user interfaces.',
		color: '#61DAFB',
		category: 'frontend'
	}),
	defineSkill({
		slug: 'angular',
		name: 'Angular',
		logo: SkillLogos.Angular,
		description:
			'TypeScript-based web application framework for building dynamic web applications.',
		color: '#DD0031',
		category: 'frontend'
	}),
	defineSkill({
		slug: 'html',
		name: 'HTML5',
		logo: SkillLogos.HTML,
		description: 'Markup language for structuring web content.',
		color: '#E34F26',
		category: 'frontend'
	}),
	defineSkill({
		slug: 'css',
		name: 'CSS3',
		logo: SkillLogos.CSS,
		description: 'Style sheet language for web presentation.',
		color: '#1572B6',
		category: 'frontend'
	}),
	defineSkill({
		slug: 'tailwind',
		name: 'Tailwind CSS',
		logo: SkillLogos.Tailwind,
		description: 'Utility-first CSS framework for custom UI design.',
		color: '#06B6D4',
		category: 'frontend'
	}),
	// defineSkill({
	// 	slug: 'sass',
	// 	name: 'Sass',
	// 	logo: SkillLogos.Sass,
	// 	description: 'CSS preprocessor for enhanced styling capabilities.',
	// 	color: '#CC6699',
	// 	category: 'frontend'
	// }),

	// Backend Development
	defineSkill({
		slug: 'spring',
		name: 'Spring',
		logo: SkillLogos.Spring,
		description: 'Application framework for Java platform.',
		color: '#6DB33F',
		category: 'backend'
	}),
	defineSkill({
		slug: 'nodejs',
		name: 'Node.js',
		logo: SkillLogos.NodeJs,
		description: 'JavaScript runtime for server-side development.',
		color: '#339933',
		category: 'backend'
	}),
	defineSkill({
		slug: 'express',
		name: 'Express',
		logo: SkillLogos.Express,
		description: 'Fast, unopinionated, minimalist web framework for Node.js.',
		color: '#000000',
		category: 'backend'
	}),
	defineSkill({
		slug: 'langchain',
		name: 'LangChain',
		logo: SkillLogos.LangChain,
		description: 'Framework for developing applications powered by language models.',
		color: '#1C3C3C',
		category: 'backend'
	}),
	defineSkill({
		slug: 'langgraph',
		name: 'LangGraph',
		logo: SkillLogos.LangGraph,
		description: 'Library for building stateful, multi-actor applications with LLMs.',
		color: '#1C3C3C',
		category: 'backend'
	}),
	defineSkill({
		slug: 'promptfoo',
		name: 'Promptfoo',
		logo: SkillLogos.Promptfoo,
		description: 'Framework for testing and evaluating prompts and LLM applications.',
		color: '#FF6B6B',
		category: 'backend'
	}),

	// Databases
	defineSkill({
		slug: 'mysql',
		name: 'MySQL',
		logo: SkillLogos.MySQL,
		description: 'Open-source relational database management system.',
		color: '#4479A1',
		category: 'databases'
	}),
	defineSkill({
		slug: 'mongodb',
		name: 'MongoDB',
		logo: SkillLogos.MongoDB,
		description: 'NoSQL document database for modern applications.',
		color: '#47A248',
		category: 'databases'
	}),
	defineSkill({
		slug: 'postgresql',
		name: 'PostgreSQL',
		logo: SkillLogos.PostgreSQL,
		description: 'Advanced open-source relational database system.',
		color: '#336791',
		category: 'databases'
	}),
	defineSkill({
		slug: 'sqlite',
		name: 'SQLite',
		logo: SkillLogos.SQLite,
		description: 'Lightweight relational database management system.',
		color: '#003B57',
		category: 'databases'
	}),

	// Infrastructure & Tools
	defineSkill({
		slug: 'docker',
		name: 'Docker',
		logo: SkillLogos.Docker,
		description: 'Containerization platform for application deployment.',
		color: '#2496ED',
		category: 'infrastructure'
	}),
	defineSkill({
		slug: 'kubernetes',
		name: 'Kubernetes',
		logo: SkillLogos.Kubernetes,
		description: 'Container orchestration platform for automating deployment and scaling.',
		color: '#326CE5',
		category: 'infrastructure'
	}),
	defineSkill({
		slug: 'aws',
		name: 'AWS',
		logo: SkillLogos.AWS,
		description: 'Cloud computing platform for scalable applications.',
		color: '#FF9900',
		category: 'infrastructure'
	}),
	defineSkill({
		slug: 'gcp',
		name: 'GCP',
		logo: SkillLogos.GCP,
		description: 'Cloud computing platform for scalable applications.',
		color: '#4285F4',
		category: 'infrastructure'
	}),
	defineSkill({
		slug: 'terraform',
		name: 'Terraform',
		logo: SkillLogos.Terraform,
		description: 'Infrastructure as Code tool for building and managing infrastructure.',
		color: '#5c4ee5',
		category: 'infrastructure'
	}),
	defineSkill({
		slug: 'git',
		name: 'Git',
		logo: SkillLogos.Git,
		description: 'Version control system for software development.',
		color: '#F05032',
		category: 'infrastructure'
	}),

	// Skills without categories (not shown on skills page but available for other uses)
	defineSkill({
		slug: 'materialui',
		name: 'Material-UI',
		logo: SkillLogos.MaterialUI,
		description: 'React component library implementing Material Design.',
		color: '#0081CB'
	}),

	// AI
	defineSkill({
		slug: 'deepseek',
		name: 'DeepSeek',
		logo: SkillLogos.DeepSeek,
		description: 'AI model for natural language processing.',
		color: '#000000'
	}),
	defineSkill({
		slug: 'ollama',
		name: 'Ollama',
		logo: SkillLogos.Ollama,
		description: 'Local large language model server for running AI models.',
		color: '#FF6B35'
	})
];

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	// Skills that should be hidden from the skills page
	const hiddenSkills = ['materialui', 'deepseek', 'ollama'];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// Skip hidden skills
		if (hiddenSkills.includes(item.slug)) {
			return;
		}

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
