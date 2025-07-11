import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/logos/${file}`;

const cv = (file: string) => `${base}/resume/${file}`;

const sh = (file: string) => `${base}/screenshots/${file}`;

export const CV = {
	CV: cv('Luis_Gonzalez_Resume.pdf')
};

export const Screenshots = {
	WeatherMap1: sh('weather-map.png')
};

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

// Skill/Technology Logos
export const SkillLogos = {
	// Programming Languages
	JavaScript: a('skills/javascript.svg'),
	TypeScript: a('skills/ts.png'),
	Java: a('skills/java.png'),
	Python: a('skills/python.png'),
	C: a('skills/c.svg'),

	// Frontend Technologies
	Svelte: a('skills/svelte.png'),
	ReactJs: a('skills/react.svg'),
	HTML: a('skills/html.svg'),
	CSS: a('skills/css.svg'),
	Tailwind: a('skills/tailwind.svg'),
	Sass: a('skills/sass.png'),

	// Backend Technologies
	Spring: a('skills/spring.svg'),
	NodeJs: a('skills/node.png'),
	LangChain: a('skills/langchain.svg'),
	LangGraph: a('skills/langgraph.svg'),
	Promptfoo: a('skills/panda.svg'),
	// Firebase: a('skills/firebase.png'), // File not available

	// DevOps & Infrastructure
	Docker: a('skills/docker-icon.svg'),
	AWS: a('skills/aws.svg'),
	Terraform: a('skills/terraform.svg'),
	MySQL: a('skills/mysql.svg'),
	Kubernetes: a('skills/kubernetes.svg'),

	// Databases
	MongoDB: a('skills/mongodb.svg'),
	PostgreSQL: a('skills/postgres.png'),

	// Design Tools (removed - files not available)

	// Development Tools
	Git: a('skills/git.svg'),

	// Legacy/Unused (keeping for reference)
	Bootstrap: a('skills/bootstrap.svg'),
	Flask: a('skills/flask.svg'),
	Go: a('skills/go.svg'),
	Rust: a('skills/rust.svg'),
	Unknown: a('no-img.svg'),
	Unocss: a('skills/unocss.svg'),
	Thymeleaf: a('skills/thymeleaf.svg'),
	jQuery: a('skills/jquery.svg'),
	SpringBoot: a('skills/springboot.svg'),
	SpringSecurity: a('skills/springsecurity.svg')
};

// Organization/Employer Logos
export const OrganizationLogos = {
	Amazon: a('organizations/amazon.svg'),
	USAF: a('organizations/US_AF.svg'),
	Rymax: a('organizations/rymax.png'),
	Codeup: a('organizations/codeup.png'),
	Verizon: a('organizations/verizon.svg'),
	DepartmentOfTheAirForce: a('organizations/department-of-the-air-force.svg'),
	Verizon2024: a('organizations/Verizon_2024_(symbol).svg')
};

// Legacy export for backward compatibility
const Assets = {
	...SkillLogos,
	...OrganizationLogos
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
