import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'coffeeshop',
		color: '#5e95e3',
		description: 'Long',
		shortDescription: 'Short',
		links: [
			{ to: 'https://github.com/', label: 'GitHub', type: 'code' },
			{ to: 'https://google.com/', label: 'Live Site', type: '' }
		],
		logo: Assets.Unknown,
		name: 'CoffeeProject',
		period: {
			from: new Date(2023, 1),
			to: new Date(2023, 1)
		},
		skills: getSkills('js', 'html', 'css'),
		type: 'Web Application'
	},
	{
		slug: 'weather-map',
		color: '#adff2f',
		description:
			'This project involves creating a web application called <code>WeatherMap</code> that utilizes HTML, CSS, jQuery, and the OpenWeatherMap API to display current weather conditions and a five-day forecast for a specified city. The application also integrates Mapbox API to allow users to drop a pin on any location on the map, retrieve coordinates, and update the weather forecast accordingly.',
		shortDescription:
			'Web application that displays current weather conditions and a five-day forecast for a specified city.',
		links: [
			{ to: 'https://luisgonzalez.dev/weather-map/', label: 'Live Site', type: '' },
			{ to: 'https://github.com/zluigon/weather-map', label: 'GitHub', type: 'code' }
		],
		logo: Assets.Unknown,
		name: 'WeatherApp',
		period: {
			from: new Date(2023, 2),
			to: new Date(2023, 2)
		},
		skills: getSkills('js', 'html', 'css', 'jquery', 'bootstrap'),
		type: 'Web Application'
	},
	{
		slug: 'flix',
		color: '#ff3e00',
		description: 'Long',
		shortDescription: 'Short',
		links: [],
		logo: Assets.Unknown,
		name: 'Flix',
		period: {
			from: new Date(2023, 3),
			to: new Date(2023, 3)
		},
		skills: getSkills('js', 'html', 'css', 'jquery', 'bootstrap'),
		type: 'Web Application'
	},
	{
		slug: 'pawspursuit',
		color: '#ff3e00',
		description:
			"PawsPursuit is an online platform committed to reuniting you with your beloved furry, feathery, or scaly companion. I designed and built the database using JPA and created controllers for seamless front-end-to-database communication. Using Spring Security I implemented a robust user authentication system and improved the platform's UX/UI for enhanced usability. Additionally, I integrated the Mapbox API for geolocation services and TalkJS for messaging functionality, enabling users to communicate and collaborate efficiently.",
		shortDescription:
			'Full-stack web application built with Spring Boot, Spring Security, and Thymeleaf.',
		links: [],
		logo: Assets.Unknown,
		name: 'PawsPursuit',
		period: {
			from: new Date(2023, 5, 1),
			to: new Date(2023, 5, 16)
		},
		skills: getSkills(
			'java',
			'springboot',
			'thymeleaf',
			'js',
			'html',
			'css',
			'bootstrap',
			'mysql',
			'springsecurity'
		),
		type: 'Full-stack Web Application',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export default MY_PROJECTS;
