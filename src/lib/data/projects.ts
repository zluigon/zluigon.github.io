import Assets, { Screenshots } from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'weather-map',
		color: '#adff2f',
		description:
			'This project involves creating a web application called <code>WeatherMap</code> that utilizes HTML, CSS, jQuery, and the OpenWeatherMap API to display current weather conditions and a five-day forecast for a specified city. The application also integrates Mapbox API to allow users to drop a pin on any location on the map, retrieve coordinates, and update the weather forecast accordingly.',
		shortDescription:
			'Web application that displays current weather conditions and a five-day forecast for a specified city.',
		links: [
			{ to: 'https://github.com/zluigon/weather-map', label: 'GitHub', type: 'code' },
			{ to: 'https://luisgonzalez.dev/weather-map/', label: 'Live Site', type: '' }
		],
		logo: Assets.Unknown,
		name: 'WeatherMap',
		period: {
			from: new Date(2023, 2),
			to: new Date(2023, 2)
		},
		skills: getSkills('js', 'html', 'css', 'jquery', 'bootstrap'),
		type: 'Web Application',
		screenshots: [{ label: '', src: Screenshots.WeatherMap1 }]
	},
	{
		slug: 'pawspursuit',
		color: '#ff3e00',
		description:
			"PawsPursuit is an online platform committed to reuniting pet owners with their beloved companions. I designed and built the database using JPA and created controllers for seamless front-end-to-database communication. Using Spring Security I implemented a robust user authentication system and improved the platform's UX/UI for enhanced usability. Additionally, I integrated the Mapbox API for geolocation services and TalkJS for messaging functionality, enabling users to communicate and collaborate efficiently.",
		shortDescription:
			'Full-stack web application built with Spring Boot, Spring Security, and Thymeleaf.',
		links: [
			{
				to: 'https://github.com/Gonzalez-Sarabia-Wright-Wood/PawsPursuit',
				label: 'GitHub',
				type: 'code'
			}
		],
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
		screenshots: []
	}
];

export const title = 'Projects';
