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
	JavaScript: a('js.png'),
	TypeScript: a('ts.png'),
	Java: a('java.png'),
	Python: a('python.png'),
	C: a('c.svg'),

	// Frontend Technologies
	Svelte: a('svelte.png'),
	ReactJs: a('react.svg'),
	HTML: a('html.svg'),
	CSS: a('css.svg'),
	Tailwind: a('tailwind.svg'),
	Sass: a('sass.png'),

	// Backend Technologies
	Spring: a('spring.svg'),
	NodeJs: a('node.png'),
	Firebase: a('firebase.png'),

	// DevOps & Infrastructure
	Docker: a('docker.svg'),
	AWS: a('aws.svg'),
	Terraform: a('terraform.svg'),
	MySQL: a('mysql.svg'),

	// Design Tools
	Photoshop: a('photoshop.svg'),
	Illustrator: a('illustrator.svg'),
	AfterEffects: a('after-effects.svg'),
	Premiere: a('premiere.svg'),

	// Development Tools
	Git: a('git.svg'),

	// Legacy/Unused (keeping for reference)
	Bootstrap: a('bootstrap.svg'),
	Flask: a('flask.svg'),
	Go: a('go.svg'),
	Rust: a('rust.svg'),
	Kubernetes: a('kubernetees.svg'),
	Unknown: a('no-img.svg'),
	Unocss: a('unocss.svg'),
	Thymeleaf: a('thymeleaf.svg'),
	jQuery: a('jquery.svg'),
	SpringBoot: a('springboot.svg'),
	SpringSecurity: a('springsecurity.svg')
};

// Organization/Employer Logos
export const OrganizationLogos = {
	Amazon: a('amazon.svg'),
	USAF: a('US_AF.svg'),
	Rymax: a('rymax.png'),
	Codeup: a('codeup.png')
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
