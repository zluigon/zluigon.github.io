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
		logo: Assets.WeatherMap,
		name: 'WeatherMap',
		period: {
			from: new Date(2023, 2),
			to: new Date(2023, 2)
		},
		skills: getSkills('js', 'html', 'css', 'jquery', 'bootstrap'),
		type: 'Web Application',
		screenshots: [{ label: '', src: Screenshots.WeatherMap }]
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
		logo: Assets.PawsPursuit,
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
	},
	{
		slug: 'inventory-app',
		color: '#3f51b5',
		description:
			'An eCommerce inventory management system built with React, Node.js, Express, and SQLite. It allows users to manage their inventory with a user-friendly interface.',
		shortDescription:
			'An eCommerce inventory management system built with React, Node.js, Express, and SQLite.',
		links: [
			{ to: 'https://github.com/KLY-Titans/inventory-app', label: 'GitHub', type: 'code' },
			{ to: 'https://inventory-app-kp4e.onrender.com/', label: 'Live Site', type: '' }
		],
		logo: Assets.MV,
		name: 'Inventory App',
		period: {
			from: new Date(2024, 9),
			to: new Date(2024, 9)
		},
		skills: getSkills('js', 'react', 'nodejs', 'express', 'sqlite'),
		type: 'Full-Stack Web Application',
		screenshots: [{ label: '', src: Screenshots.Inventory }]
	},
	{
		slug: 'planet-express',
		color: '#ff9900',
		description:
			'A service API backend for internal users to manage shipments. <br> Users can: <ul><li>Create, update, and delete shipments</li><li>View shipment details</li><li>View shipment history</li><li>View shipment status</li></ul> <br> Provided Role-Based Access Control (RBAC) for different user types with JWT authentication.',
		shortDescription: 'A service API backend for internal users to manage shipments.',
		links: [
			{
				to: 'https://github.com/Farnsworth-Enterprises/PlanetExpress',
				label: 'GitHub',
				type: 'code'
			}
		],
		logo: Assets.PlanEx,
		name: 'Planet Express',
		period: {
			from: new Date(2025, 3),
			to: new Date(2025, 3)
		},
		skills: getSkills('js', 'nodejs', 'express', 'sqlite'),
		type: 'Backend API',
		screenshots: [{ label: '', src: Screenshots.PlanetExpress }]
	},
	{
		slug: 'planex',
		color: '#ff9900',
		description:
			' A web-based application inspired by the series Futurama. Allows users to assemble a crew to undertake various missions of various difficulties. By evaluating each potential crew members rating, users can strategically select the most suitable team to complete missions.',
		shortDescription:
			' A web-based application inspired by the series Futurama. Allows users to assemble a crew to undertake various missions of various difficulties.',
		links: [
			{ to: 'https://github.com/Farnsworth-Enterprises/PlanExCrew', label: 'GitHub', type: 'code' },
			{ to: 'https://planexcrew.netlify.app/', label: 'Live Site', type: '' }
		],
		logo: Assets.Bender,
		name: 'PlanEx',
		period: {
			from: new Date(2025, 4),
			to: new Date(2025, 4)
		},
		skills: getSkills('react', 'js', 'nodejs', 'materialui'),
		type: 'Web Application',
		screenshots: [{ label: '', src: Screenshots.PlanEx }]
	},
	{
		slug: 'morbo',
		color: '#508c50',
		description:
			' An AI-powered Github Action that automatically generates a descriptive Pull RequestPR) summaries using Ollama-powered LLM. Designed to enhance developer productivity by providing a quick overview of the changes made in a PR.',
		shortDescription:
			'GitHub Action that auto-generates PR summaries using Ollama LLM to enhance developer workflow.',
		links: [
			{ to: 'https://github.com/Farnsworth-Enterprises/Morbo', label: 'GitHub', type: 'code' }
		],
		logo: Assets.Morbo,
		name: 'Morbo',
		period: {
			from: new Date(2025, 5),
			to: new Date(2025, 5)
		},
		skills: getSkills('python', 'docker', 'langchain', 'gcp', 'deepseek'),
		type: 'Web Application',
		screenshots: [{ label: '', src: Screenshots.Morbo }]
	}
];

export const title = 'Projects';
