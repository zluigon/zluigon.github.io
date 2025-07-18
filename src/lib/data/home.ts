import { type HomeLink } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';
export const firstName = 'Luis';
export const lastName = 'Gonzalez';
export const description =
	'Software Engineer and USAF Veteran specializing in AI-powered applications, cloud infrastructure, and full-stack development. Passionate about leveraging modern technologies to build scalable solutions.';

export const links: Array<HomeLink> = [
	{
		platform: 'simple-icons:github',
		link: 'https://github.com/zluigon'
	},
	{
		platform: 'simple-icons:linkedin',
		link: 'https://www.linkedin.com/in/zluigon/'
	},
	{
		platform: 'carbon:email',
		link: 'luis.nmn.gonzalez@gmail.com'
	}
	// {
	// 	platform: 'mdi:resume',
	// 	link: 'https://docs.google.com/document/d/1F9354AII9r7lxVu0iee0-ogjx7oF8nlS2ePFs06TxS0/edit?usp=sharing'
	// }
];

export const skills = getSkills('langchain', 'aws', 'ts', 'docker', 'terraform', 'python');
