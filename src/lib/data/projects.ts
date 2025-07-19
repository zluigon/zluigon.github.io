import Assets, { Screenshots } from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'weather-map',
		color: '#adff2f',
		description: `<strong>Overview:</strong> A web application that displays current weather conditions and a five-day forecast for any specified city. Users can search by city name or drop a pin on an interactive map to get weather data for that location. Integrates OpenWeatherMap API for weather data and Mapbox API for interactive mapping.<br><br><strong>Skills Applied:</strong><ul><li><strong>Frontend Development:</strong> Built responsive UI using HTML, CSS, and jQuery</li><li><strong>API Integration:</strong> Connected to OpenWeatherMap and Mapbox APIs</li><li><strong>Interactive Features:</strong> Implemented map pin dropping and coordinate retrieval</li><li><strong>Data Display:</strong> Created dynamic weather information display with Bootstrap styling</li></ul><br><strong>Takeaways:</strong><ul><li>Learned to work with multiple external APIs simultaneously</li><li>Gained experience with geolocation and mapping technologies</li><li>Improved frontend development skills with jQuery and Bootstrap</li><li>Understood the importance of error handling for API calls</li></ul>`,
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
		description: `<strong>Overview:</strong> A full-stack web application designed to help pet owners reunite with their lost companions. The platform includes user authentication, pet listing/management, geolocation services for lost pets, and messaging functionality for communication between users.<br><br><strong>Skills Applied:</strong><ul><li><strong>Backend Development:</strong> Built RESTful controllers and services using Spring Boot</li><li><strong>Database Design:</strong> Designed and implemented MySQL database using JPA/Hibernate</li><li><strong>Security Implementation:</strong> Implemented user authentication and authorization with Spring Security</li><li><strong>Frontend Development:</strong> Created responsive UI using Thymeleaf, HTML, CSS, and JavaScript</li><li><strong>API Integration:</strong> Integrated Mapbox API for geolocation and TalkJS for messaging</li></ul><br><strong>Takeaways:</strong><ul><li>Gained comprehensive experience with Spring Boot ecosystem</li><li>Learned to implement secure user authentication systems</li><li>Understood the importance of user experience in web applications</li><li>Developed skills in integrating multiple third-party services</li></ul>`,
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
		description: `<strong>Overview:</strong> An eCommerce inventory management system that allows users to manage product inventory through a user-friendly interface. Built with React for the frontend, Node.js and Express for the backend API, and SQLite for data persistence.<br><br><strong>Skills Applied:</strong><ul><li><strong>Backend Development:</strong> Configured RESTful API routes for full CRUD operations</li><li><strong>Database Management:</strong> Designed and implemented SQLite database schema</li><li><strong>Full-Stack Integration:</strong> Connected React frontend with Express backend</li><li><strong>Team Collaboration:</strong> Coordinated with team members on API design and frontend implementation</li></ul><br><strong>Takeaways:</strong><ul><li>Gained hands-on experience with full-stack development workflow</li><li>Learned to design APIs that serve both frontend and database needs</li><li>Improved collaboration skills working with multiple developers</li><li>Understood the importance of clear API documentation for team coordination</li></ul><br><strong>Contributors:</strong><ul><li><a href="https://github.com/zluigon" target="_blank" rel="noopener noreferrer">Luis Gonzalez</a></li><li><a href="https://github.com/kennyyang2019" target="_blank" rel="noopener noreferrer">Kenny Yang</a></li><li><a href="https://github.com/YawoSadji" target="_blank" rel="noopener noreferrer">Yawo Sadji</a></li></ul>`,
		shortDescription:
			'An eCommerce inventory management system built with React, Node.js, Express, and SQLite.',
		links: [
			{ to: 'https://github.com/KLY-Titans/inventory-app', label: 'GitHub', type: 'code' },
			{ to: 'https://inventory-app-kp4e.onrender.com/', label: 'Live Site', type: '' }
		],
		logo: Assets.MV,
		name: 'KLY Titans - Inventory Management',
		period: {
			from: new Date(2024, 9),
			to: new Date(2024, 9)
		},
		skills: getSkills('js', 'react', 'nodejs', 'express', 'sqlite'),
		type: 'Full-Stack Web Application',
		screenshots: [
			{ label: '', src: Screenshots.Inventory },
			{ label: '', src: Screenshots.Inventory2 },
			{ label: '', src: Screenshots.Inventory3 }
		]
	},
	{
		slug: 'planet-express',
		color: '#ff9900',
		description: `<strong>Overview:</strong> A backend API service for internal shipment management. The system allows users to perform full CRUD operations on shipments, track shipment history, and manage shipment statuses. Implements role-based access control to ensure different user types have appropriate permissions.<br><br><strong>Skills Applied:</strong><ul><li><strong>API Development:</strong> Built RESTful endpoints for shipment management operations</li><li><strong>Authentication & Authorization:</strong> Implemented JWT-based authentication with role-based access control</li><li><strong>Database Management:</strong> Designed SQLite database schema for shipment tracking</li><li><strong>Security:</strong> Implemented proper input validation and security measures</li></ul><br><strong>Takeaways:</strong><ul><li>Learned to design secure API endpoints with proper authentication</li><li>Gained experience with role-based access control implementation</li><li>Understood the importance of data validation and security in APIs</li><li>Developed skills in building scalable backend services</li></ul><strong>Contributors:</strong><ul><li><a href="https://github.com/zluigon" target="_blank" rel="noopener noreferrer">Luis Gonzalez</a></li><li><a href="https://github.com/jbiehl88" target="_blank" rel="noopener noreferrer">Jordan Biehl</a></li></ul>`,
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
		description: `<strong>Overview:</strong> A web-based application inspired by Futurama that allows users to assemble crews for various missions. Users can evaluate crew member ratings and strategically select the most suitable team to complete missions of different difficulty levels. Features an interactive crew management system with mission assignment capabilities.<br><br><strong>Skills Applied:</strong><ul><li><strong>Frontend Development:</strong> Built interactive UI using React and Material-UI</li><li><strong>State Management:</strong> Implemented complex state management for crew and mission data</li><li><strong>Backend Integration:</strong> Connected React frontend with Node.js backend API</li><li><strong>User Experience:</strong> Designed intuitive crew selection and mission assignment interface</li></ul><br><strong>Takeaways:</strong><ul><li>Gained experience with React component architecture and state management</li><li>Learned to design user interfaces for complex data relationships</li><li>Improved skills in frontend-backend integration</li><li>Understood the importance of user experience in interactive applications</li></ul><strong>Contributors:</strong><ul><li><a href="https://github.com/zluigon" target="_blank" rel="noopener noreferrer">Luis Gonzalez</a></li><li><a href="https://github.com/jbiehl88" target="_blank" rel="noopener noreferrer">Jordan Biehl</a></li></ul>`,
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
		description: `<strong>Overview:</strong> An AI-powered GitHub Action that automatically generates descriptive Pull Request summaries using Ollama-powered LLM. The tool enhances developer productivity by providing quick, comprehensive overviews of changes made in pull requests, helping teams understand code changes more efficiently.<br><br><strong>Skills Applied:</strong><ul><li><strong>AI/ML Integration:</strong> Integrated Ollama LLM for natural language processing</li><li><strong>DevOps:</strong> Created GitHub Actions workflow for automated PR analysis</li><li><strong>Python Development:</strong> Built the core logic for PR analysis and summary generation</li><li><strong>Cloud Infrastructure:</strong> Deployed and managed the service on Google Cloud Platform</li><li><strong>Containerization:</strong> Used Docker for consistent deployment and scaling</li></ul><br><strong>Takeaways:</strong><ul><li>Gained hands-on experience with AI/ML integration in development tools</li><li>Learned to build and deploy GitHub Actions for developer productivity</li><li>Understood the importance of automation in software development workflows</li><li>Developed skills in cloud deployment and containerization</li></ul><strong>Contributors:</strong><ul><li><a href="https://github.com/zluigon" target="_blank" rel="noopener noreferrer">Luis Gonzalez</a></li><li><a href="https://github.com/jbiehl88" target="_blank" rel="noopener noreferrer">Jordan Biehl</a></li></ul>`,
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
