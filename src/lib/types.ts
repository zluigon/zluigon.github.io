export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube',
	Resume = 'resume',
	Download = 'download'
}

export type Icon = `i-${string}-${string}`;

export enum ContractType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contract',
	Internship = 'Internship'
}

export type Asset = string | { light: string; dark: string };

export interface Item<S extends string = string> {
	slug: S;
	name: string;
	logo: Asset;
	shortDescription: string;
	description: string;
	screenshots?: Array<{ src: string; label: string }>;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
	type: string;
}

export interface IconLink extends Link {
	icon: Asset;
}

export interface Skill<S extends string = string> extends Omit<Item<S>, 'shortDescription'> {
	color: string;
}

export interface Project<S extends string = string> extends Item<S> {
	links: Array<Link>;
	color: string;
	period: {
		from: Date;
		to?: Date;
	};
	type: string;
	skills: Array<Skill<S>>;
}

export interface Experience<S extends string = string> extends Project<S> {
	company: string;
	location: string;
	contract: ContractType;
}

export interface Education<S extends string = string> extends Item<S> {
	organization: string;
	location: string;
	period: {
		from: Date;
		to?: Date;
	};
	subjects: Array<string>;
	degree: string;
	color: string;
}

export interface PageParams {
	title: string;
}

export interface PageWithSearchParams<T> extends PageParams {
	items: Array<T>;
}

export interface HomeLink {
	platform: string;
	link: string;
}

export interface HomePageParams extends PageParams {
	firstName: string;
	lastName: string;
	description: string;
	links: Array<HomeLink>;
	skills?: Array<Skill>;
}

export type SearchPageParams = PageParams;

export type ProjectPageParams = PageWithSearchParams<Project>;

export type ExperiencePageParams = PageWithSearchParams<Experience>;

export type EducationPageParams = PageWithSearchParams<Education>;

export type SkillsPageParams = PageWithSearchParams<Skill>;

export interface ResumePageParams extends PageParams {
	item: string;
}
