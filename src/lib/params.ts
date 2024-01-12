import MY_EDUCATION from './education.params';
import MY_EXPERIENCE from './experience.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';
import { CV } from './data/assets';

export const TITLE_SUFFIX = 'Luis Gonzalez';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experience',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};

export const getPlatformIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
		case Platform.Resume:
			return Icons.Resume;
		case Platform.Download:
			return Icons.Download;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	firstName: 'Luis',
	lastName: 'Gonzalez',
	description:
		'Software Engineer and USAF Veteran with a passion for building and designing software. I have a strong background in full-stack development and a passion for learning new technologies.',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/zluigon' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/zluigon/'
		},
		{
			platform: Platform.Email,
			link: 'luis.nmn.gonzalez@gmail.com'
		},
		{
			platform: Platform.Download,
			link: CV.CV
		}
	]
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCE: ExperiencePageParams = {
	title: 'Experience',
	items: MY_EXPERIENCE
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATION,
	title: 'Education'
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: CV.CV
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
