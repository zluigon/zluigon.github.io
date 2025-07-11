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
	WeatherMap: sh('weather-map.png'),
	PlanEx: sh('planex.png'),
	PlanetExpress: sh('planetxpress.png'),
	Morbo: sh('morbo.png'),
	Inventory: sh('inventory-app.png')
};

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

// Skill/Technology Logos
export const SkillLogos = {
	// Programming Languages
	JavaScript: a('skills/javascript.svg'),
	TypeScript: a('skills/typescript.svg'),
	Java: a('skills/java.png'),
	Python: a('skills/python.svg'),
	C: a('skills/c.svg'),
	Go: a('skills/go.svg'),

	// Frontend Technologies
	Svelte: a('skills/svelte.png'),
	ReactJs: a('skills/react.svg'),
	Angular: a('skills/angular.svg'),
	HTML: a('skills/html.svg'),
	CSS: a('skills/css.svg'),
	Tailwind: a('skills/tailwind.svg'),
	Sass: a('skills/sass.png'),
	MaterialUI: a('skills/mui.svg'),

	// Backend Technologies
	Spring: a('skills/spring.svg'),
	NodeJs: a('skills/node.png'),
	Express: a('skills/express.png'),
	LangChain: a('skills/langchain.svg'),
	LangGraph: a('skills/langgraph.svg'),
	Promptfoo: a('skills/panda.svg'),

	// DevOps & Infrastructure
	Docker: a('skills/docker.svg'),
	AWS: a('skills/aws.svg'),
	GCP: a('skills/gcp.svg'),
	Terraform: a('skills/terraform.svg'),
	MySQL: a('skills/mysql.svg'),
	Kubernetes: a('skills/kubernetes.svg'),

	// Databases
	MongoDB: a('skills/mongodb.svg'),
	PostgreSQL: a('skills/postgres.png'),
	SQLite: a('skills/sqlite.svg'),

	// AI
	DeepSeek: a('skills/deepseek.svg'),

	// Development Tools
	Git: a('skills/git.svg'),

	// Legacy/Unused (keeping for reference)
	Bootstrap: a('skills/bootstrap.svg'),
	Flask: a('skills/flask.svg'),
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

export const ProjectLogos = {
	PlanEx: a('PlanExLogo.svg'),
	MV: a('mv.png'),
	WeatherMap: a('weather.svg'),
	PawsPursuit: a('pawsp.png'),
	Bender: a('bender.ico'),
	Morbo: a('Morbo.png')
};

// Legacy export for backward compatibility
const Assets = {
	...SkillLogos,
	...OrganizationLogos,
	...ProjectLogos
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
