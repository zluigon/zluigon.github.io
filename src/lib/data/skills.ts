import { SkillLogos } from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frontend Development', slug: 'frontend' }),
	defineSkillCategory({ name: 'Backend Development', slug: 'backend' }),
	defineSkillCategory({ name: 'Databases & DevOps', slug: 'db-devops' }),
	defineSkillCategory({ name: 'Design & Creative', slug: 'design' }),
	defineSkillCategory({ name: 'Tools & Utilities', slug: 'tools' })
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
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		name: 'TypeScript',
		logo: SkillLogos.TypeScript,
		description: 'Typed superset of JavaScript that compiles to plain JavaScript.',
		color: '#3178C6',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		name: 'Java',
		logo: SkillLogos.Java,
		description: 'Object-oriented programming language for enterprise applications.',
		color: '#ED8B00',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		name: 'Python',
		logo: SkillLogos.Python,
		description: 'High-level programming language for general-purpose programming.',
		color: '#3776AB',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c',
		name: 'C',
		logo: SkillLogos.C,
		description: 'General-purpose programming language.',
		color: '#A8B9CC',
		category: 'pro-lang'
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
	defineSkill({
		slug: 'sass',
		name: 'Sass',
		logo: SkillLogos.Sass,
		description: 'CSS preprocessor for enhanced styling capabilities.',
		color: '#CC6699',
		category: 'frontend'
	}),

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
		slug: 'firebase',
		name: 'Firebase',
		logo: SkillLogos.Firebase,
		description: 'Backend-as-a-Service platform for web and mobile apps.',
		color: '#FFCA28',
		category: 'backend'
	}),

	// Databases & DevOps
	defineSkill({
		slug: 'mysql',
		name: 'MySQL',
		logo: SkillLogos.MySQL,
		description: 'Open-source relational database management system.',
		color: '#4479A1',
		category: 'db-devops'
	}),
	defineSkill({
		slug: 'docker',
		name: 'Docker',
		logo: SkillLogos.Docker,
		description: 'Containerization platform for application deployment.',
		color: '#2496ED',
		category: 'db-devops'
	}),
	defineSkill({
		slug: 'aws',
		name: 'AWS',
		logo: SkillLogos.AWS,
		description: 'Cloud computing platform for scalable applications.',
		color: '#FF9900',
		category: 'db-devops'
	}),
	defineSkill({
		slug: 'terraform',
		name: 'Terraform',
		logo: SkillLogos.Terraform,
		description: 'Infrastructure as Code tool for building and managing infrastructure.',
		color: '#5c4ee5',
		category: 'db-devops'
	}),

	// Design & Creative
	defineSkill({
		slug: 'photoshop',
		name: 'Photoshop',
		logo: SkillLogos.Photoshop,
		description: 'Professional image editing and graphic design software.',
		color: '#31A8FF',
		category: 'design'
	}),
	defineSkill({
		slug: 'illustrator',
		name: 'Illustrator',
		logo: SkillLogos.Illustrator,
		description: 'Vector graphics editor for digital art and illustrations.',
		color: '#FF9A00',
		category: 'design'
	}),
	defineSkill({
		slug: 'after-effects',
		name: 'After Effects',
		logo: SkillLogos.AfterEffects,
		description: 'Motion graphics and visual effects software.',
		color: '#9999FF',
		category: 'design'
	}),
	defineSkill({
		slug: 'premiere',
		name: 'Premiere Pro',
		logo: SkillLogos.Premiere,
		description: 'Professional video editing software.',
		color: '#EA77FF',
		category: 'design'
	}),

	// Tools & Utilities
	defineSkill({
		slug: 'git',
		name: 'Git',
		logo: SkillLogos.Git,
		description: 'Version control system for software development.',
		color: '#F05032',
		category: 'tools'
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

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

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
