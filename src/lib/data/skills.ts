import Assets from './assets';
import type { Skill } from '../types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';

const s = <S extends string>(skill: Skill<S>) => skill;

export const items = [
	s({
		slug: 'js',
		name: 'JavaScript',
		logo: Assets.JavaScript,
		description:
			'JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
		color: '#F7DF1E'
	}),
	s({
		slug: 'ts',
		name: 'TypeScript',
		logo: Assets.TypeScript,
		description:
			"TypeScript is an open-source language which builds on JavaScript, one of the world's most used tools, by adding static type definitions.",
		color: '#3178C6'
	}),
	s({
		slug: 'svelte',
		name: 'Svelte',
		logo: Assets.Svelte,
		description:
			'Svelte is a free and open-source front end compiler created by Rich Harris and maintained by the Svelte core team members. Svelte applications do not include framework references. Instead, building a Svelte application generates code to manipulate the DOM, which may give better client run-time performance.',
		color: '#FF3E00'
	}),
	s({
		slug: 'java',
		name: 'Java',
		logo: Assets.Java,
		description:
			'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere, meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.',
		color: 'red'
	}),
	s({
		slug: 'spring',
		name: 'Spring',
		logo: Assets.Spring,
		description:
			"Spring is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE platform.",
		color: '#6DB33F'
	}),
	s({
		slug: 'springboot',
		name: 'Spring Boot',
		logo: Assets.SpringBoot,
		description:
			'Spring Boot is an open-source micro framework maintained by SpringSource, a subsidiary of Pivotal, that provides a simpler way to create stand-alone, production-grade Spring based applications that you can run.',
		color: '#6DB33F'
	}),
	s({
		slug: 'springsecurity',
		name: 'Spring Security',
		logo: Assets.SpringSecurity,
		description:
			'Spring Security is a powerful and highly customizable authentication and access-control framework. It is the de-facto standard for securing Spring-based applications.',
		color: '#6DB33F'
	}),
	s({
		slug: 'html',
		name: 'HTML5',
		logo: Assets.HTML,
		description:
			'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.',
		color: '#E34F26'
	}),
	s({
		slug: 'css',
		name: 'CSS3',
		logo: Assets.CSS,
		description:
			'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
		color: '#1572B6'
	}),
	s({
		slug: 'bootstrap',
		name: 'Bootstrap',
		logo: Assets.Bootstrap,
		description:
			'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
		color: '#7952B3'
	}),
	s({
		slug: 'tailwind',
		name: 'Tailwind',
		logo: Assets.Tailwind,
		description:
			'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.',
		color: '#06B6D4'
	}),
	s({
		slug: 'git',
		name: 'Git',
		logo: Assets.Git,
		description:
			'Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.',
		color: '#F05032'
	}),
	s({
		slug: 'mysql',
		name: 'MySQL',
		logo: Assets.MySQL,
		description:
			'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.',
		color: '#4479A1'
	}),
	s({
		slug: 'thymeleaf',
		name: 'Thymeleaf',
		logo: Assets.Thymeleaf,
		description:
			'Thymeleaf is a Java XML/XHTML/HTML5 template engine that can work both in web (Servlet-based) and non-web environments. It is better suited for serving XHTML/HTML5 at the view layer of MVC-based web applications, but it can process any XML file even in offline environments.',
		color: '#005F0F'
	}),
	s({
		slug: 'jquery',
		name: 'jQuery',
		logo: Assets.jQuery,
		description:
			'jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License.',
		color: '#0769AD'
	}),
	s({
		slug: 'c',
		name: 'C',
		logo: Assets.C,
		description:
			'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.',
		color: '#A8B9CC'
	})
];

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));
