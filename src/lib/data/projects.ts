import Assets, { Screenshots } from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'weather-map',
		color: '#4A90E2',
		description: `<strong>Overview:</strong> A web application that displays current weather conditions and a five-day forecast for any specified city. Users can search by city name or drop a pin on an interactive map to get weather data for that location. Integrates OpenWeatherMap API for weather data and Mapbox API for interactive mapping.<br><br><strong>Skills Applied:</strong><ul><li><strong>Frontend Development:</strong> Built responsive UI using HTML, CSS, and jQuery</li><li><strong>API Integration:</strong> Connected to OpenWeatherMap and Mapbox APIs</li><li><strong>Interactive Features:</strong> Implemented map pin dropping and coordinate retrieval</li><li><strong>Data Display:</strong> Created dynamic weather information display with Bootstrap styling</li></ul><br><strong>Takeaways:</strong><ul><li>Learned to work with multiple external APIs simultaneously</li><li>Gained experience with geolocation and mapping technologies</li><li>Improved frontend development skills with jQuery and Bootstrap</li><li>Understood the importance of error handling for API calls</li></ul>`,
		shortDescription:
			'Interactive weather app with map integration using OpenWeatherMap and Mapbox APIs.',
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
		color: '#FF6B9D',
		description: `<strong>Overview:</strong> A full-stack web application designed to help pet owners reunite with their lost companions. The platform includes user authentication, pet listing/management, geolocation services for lost pets, and messaging functionality for communication between users.<br><br><strong>Skills Applied:</strong><ul><li><strong>Backend Development:</strong> Built RESTful controllers and services using Spring Boot</li><li><strong>Database Design:</strong> Designed and implemented MySQL database using JPA/Hibernate</li><li><strong>Security Implementation:</strong> Implemented user authentication and authorization with Spring Security</li><li><strong>Frontend Development:</strong> Created responsive UI using Thymeleaf, HTML, CSS, and JavaScript</li><li><strong>API Integration:</strong> Integrated Mapbox API for geolocation and TalkJS for messaging</li></ul><br><strong>Takeaways:</strong><ul><li>Gained comprehensive experience with Spring Boot ecosystem</li><li>Learned to implement secure user authentication systems</li><li>Understood the importance of user experience in web applications</li><li>Developed skills in integrating multiple third-party services</li></ul>`,
		shortDescription:
			'Pet reunion platform with geolocation services, messaging, and secure user authentication.',
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
		type: 'Full-Stack Web Application',
		screenshots: []
	},
	{
		slug: 'inventory-app',
		color: '#2E7D32',
		description: `<strong>Overview:</strong> An eCommerce inventory management system that allows users to manage product inventory through a user-friendly interface. Built with React for the frontend, Node.js and Express for the backend API, and SQLite for data persistence.<br><br><strong>Skills Applied:</strong><ul><li><strong>Backend Development:</strong> Configured RESTful API routes for full CRUD operations</li><li><strong>Database Management:</strong> Designed and implemented SQLite database schema</li><li><strong>Full-Stack Integration:</strong> Connected React frontend with Express backend</li><li><strong>Team Collaboration:</strong> Coordinated with team members on API design and frontend implementation</li></ul><br><strong>Takeaways:</strong><ul><li>Gained hands-on experience with full-stack development workflow</li><li>Learned to design APIs that serve both frontend and database needs</li><li>Improved collaboration skills working with multiple developers</li><li>Understood the importance of clear API documentation for team coordination</li></ul><br><strong>Contributors:</strong><ul><li><a href="https://github.com/zluigon" target="_blank" rel="noopener noreferrer">Luis Gonzalez</a></li><li><a href="https://github.com/kennyyang2019" target="_blank" rel="noopener noreferrer">Kenny Yang</a></li><li><a href="https://github.com/YawoSadji" target="_blank" rel="noopener noreferrer">Yawo Sadji</a></li></ul>`,
		shortDescription:
			'Team-built inventory management system with full CRUD operations and user-friendly interface.',
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
		slug: 'quickthinx',
		color: '#9C27B0',
		description: `<strong>Overview:</strong> A full-stack blogging application built with Angular and Node.js that allows users to create, edit, and delete blog posts. Features comprehensive user authentication and authorization, ensuring only post authors can modify their content. The application provides a secure, user-friendly platform for content creation and management.<br><br><strong>Skills Applied:</strong><ul><li><strong>Frontend Development:</strong> Built responsive UI using Angular and Angular Material</li><li><strong>Backend API Development:</strong> Created RESTful endpoints for blog CRUD operations</li><li><strong>Authentication & Authorization:</strong> Implemented JWT-based authentication with role-based access control</li><li><strong>Database Management:</strong> Designed and implemented MongoDB schema using Mongoose ODM</li><li><strong>Security Implementation:</strong> Ensured secure user authentication and post ownership validation</li></ul><br><strong>Takeaways:</strong><ul><li>Gained comprehensive experience with Angular framework and component architecture</li><li>Learned to implement secure authentication and authorization systems</li><li>Developed skills in MongoDB database design and Mongoose integration</li><li>Understood the importance of conditional rendering for user experience</li><li>Improved full-stack development workflow with Angular and Node.js</li></ul>`,
		shortDescription:
			'Secure blogging platform with JWT authentication and author-only content management.',
		links: [{ to: 'https://github.com/zluigon/quickthinx', label: 'GitHub', type: 'code' }],
		logo: Assets.QuickThinx,
		name: 'QuickThinx',
		period: {
			from: new Date(2024, 10),
			to: new Date(2024, 10)
		},
		skills: getSkills('angular', 'ts', 'nodejs', 'express', 'mongodb'),
		type: 'Full-Stack Web Application'
	},
	{
		slug: 'planet-express',
		color: '#1976D2',
		description: `<strong>Overview:</strong> A backend API service for internal shipment management. The system allows users to perform full CRUD operations on shipments, track shipment history, and manage shipment statuses. Implements role-based access control to ensure different user types have appropriate permissions.<br><br><strong>Skills Applied:</strong><ul><li><strong>API Development:</strong> Built RESTful endpoints for shipment management operations</li><li><strong>Authentication & Authorization:</strong> Implemented JWT-based authentication with role-based access control</li><li><strong>Database Management:</strong> Designed SQLite database schema for shipment tracking</li><li><strong>Security:</strong> Implemented proper input validation and security measures</li></ul><br><strong>Takeaways:</strong><ul><li>Learned to design secure API endpoints with proper authentication</li><li>Gained experience with role-based access control implementation</li><li>Understood the importance of data validation and security in APIs</li><li>Developed skills in building scalable backend services</li></ul><br><strong>Contributors:</strong><ul><li><a href="https://github.com/zluigon" target="_blank" rel="noopener noreferrer">Luis Gonzalez</a></li><li><a href="https://github.com/jbiehl88" target="_blank" rel="noopener noreferrer">Jordan Biehl</a></li></ul>`,
		shortDescription:
			'Secure shipment management API with JWT authentication and role-based access control.',
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
			from: new Date(2025, 2),
			to: new Date(2025, 2)
		},
		skills: getSkills('js', 'nodejs', 'express', 'sqlite'),
		type: 'Backend API',
		screenshots: [{ label: '', src: Screenshots.PlanetExpress }]
	},
	{
		slug: 'planex',
		color: '#FF5722',
		description: `<strong>Overview:</strong> A web-based application inspired by Futurama that allows users to assemble crews for various missions. Users can evaluate crew member ratings and strategically select the most suitable team to complete missions of different difficulty levels. Features an interactive crew management system with mission assignment capabilities.<br><br><strong>Skills Applied:</strong><ul><li><strong>Frontend Development:</strong> Built interactive UI using React and Material-UI</li><li><strong>State Management:</strong> Implemented complex state management for crew and mission data</li><li><strong>Backend Integration:</strong> Connected React frontend with Node.js backend API</li><li><strong>User Experience:</strong> Designed intuitive crew selection and mission assignment interface</li></ul><br><strong>Takeaways:</strong><ul><li>Gained experience with React component architecture and state management</li><li>Learned to design user interfaces for complex data relationships</li><li>Improved skills in frontend-backend integration</li><li>Understood the importance of user experience in interactive applications</li></ul><br><strong>Contributors:</strong><ul><li><a href="https://github.com/zluigon" target="_blank" rel="noopener noreferrer">Luis Gonzalez</a></li><li><a href="https://github.com/jbiehl88" target="_blank" rel="noopener noreferrer">Jordan Biehl</a></li></ul>`,
		shortDescription:
			'Interactive crew management game with strategic mission assignment and team building.',
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
		skills: getSkills('react', 'js', 'nodejs', 'express', 'materialui'),
		type: 'Web Application',
		screenshots: [{ label: '', src: Screenshots.PlanEx }]
	},
	{
		slug: 'morbo',
		color: '#00BCD4',
		description: `<strong>Overview:</strong> An AI-powered GitHub Action that automatically generates descriptive Pull Request summaries using Ollama running on GCP Cloud Run with DeepSeek LLM. The tool enhances developer productivity by providing quick, comprehensive overviews of changes made in pull requests, helping teams understand code changes more efficiently.<br><br><strong>Skills Applied:</strong><ul><li><strong>AI/ML Integration:</strong> Integrated Ollama with DeepSeek LLM for natural language processing</li><li><strong>DevOps:</strong> Created GitHub Actions workflow for automated PR analysis</li><li><strong>Python Development:</strong> Built the core logic for PR analysis and summary generation</li><li><strong>Cloud Infrastructure:</strong> Deployed and managed Ollama service on Google Cloud Run</li><li><strong>Containerization:</strong> Used Docker for consistent deployment and scaling</li></ul><br><strong>Takeaways:</strong><ul><li>Gained hands-on experience with AI/ML integration in development tools</li><li>Learned to build and deploy GitHub Actions for developer productivity</li><li>Understood the importance of automation in software development workflows</li><li>Developed skills in cloud-native deployment with Google Cloud Run</li><li>Experienced serverless AI service architecture and scaling</li></ul><br><strong>Contributors:</strong><ul><li><a href="https://github.com/zluigon" target="_blank" rel="noopener noreferrer">Luis Gonzalez</a></li><li><a href="https://github.com/jbiehl88" target="_blank" rel="noopener noreferrer">Jordan Biehl</a></li></ul>`,
		shortDescription:
			'AI-powered GitHub Action for automated PR summaries using Ollama on GCP Cloud Run with DeepSeek LLM.',
		links: [
			{ to: 'https://github.com/Farnsworth-Enterprises/Morbo', label: 'GitHub', type: 'code' },
			{
				to: 'https://github.com/marketplace/actions/pr-summary-generator',
				label: 'Marketplace',
				type: ''
			}
		],
		logo: Assets.Morbo,
		name: 'Morbo',
		period: {
			from: new Date(2025, 5),
			to: new Date(2025, 5)
		},
		skills: getSkills('python', 'docker', 'langchain', 'gcp', 'deepseek', 'ollama'),
		type: 'DevOps Tool',
		screenshots: [{ label: '', src: Screenshots.Morbo }]
	}
];

export const title = 'Projects';
