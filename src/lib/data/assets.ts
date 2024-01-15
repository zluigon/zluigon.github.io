import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/logos/${file}`;

const cv = (file: string) => `${base}/resume/${file}`;

export const CV = {
	CV: cv('Luis_Gonzalez_Resume.pdf')
};

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	AWS: a('aws.svg'),
	Bootstrap: a('bootstrap.svg'),
	C: a('c.svg'),
	Flask: a('flask.svg'),
	Go: a('go.svg'),
	Rust: a('rust.svg'),
	Docker: a('docker.svg'),
	Kubernetes: a('kubernetees.svg'),
	TypeScript: a('ts.png'),
	ReactJs: a('react.svg'),
	Python: a('python.png'),
	NodeJs: a('node.png'),
	Svelte: a('svelte.png'),
	JavaScript: a('js.png'),
	Java: a('java.png'),
	Firebase: a('firebase.png'),
	Sass: a('sass.png'),
	Unknown: a('no-img.svg'),
	Tailwind: a('tailwind.svg'),
	HTML: a('html.svg'),
	Premiere: a('premiere.svg'),
	Photoshop: a('photoshop.svg'),
	CSS: a('css.svg'),
	AfterEffects: a('after-effects.svg'),
	Illustrator: a('illustrator.svg'),
	Unocss: a('unocss.svg'),
	Codeup: a('codeup.png'),
	MySQL: a('mysql.svg'),
	Spring: a('spring.svg'),
	Git: a('git.svg'),
	Thymeleaf: a('thymeleaf.svg'),
	jQuery: a('jquery.svg'),
	SpringBoot: a('springboot.svg'),
	Rymax: a('rymax.png'),
	Amazon: a('amazon.svg'),
	USAF: a('US_AF.svg'),
	SpringSecurity: a('springsecurity.svg')
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
