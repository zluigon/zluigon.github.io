// Iconify utility functions for logo management

// Map of technology names to their Iconify icon names
export const iconMap: Record<string, string> = {
	// Programming Languages
	// JavaScript: 'logos:javascript',
	TypeScript: 'logos:typescript-icon',
	Python: 'logos:python',
	Java: 'logos:java',
	C: 'logos:c',
	'C++': 'logos:c-plusplus',
	'C#': 'logos:c-sharp',
	Go: 'logos:go',
	Rust: 'logos:rust',
	Ruby: 'logos:ruby',
	PHP: 'logos:php',
	Swift: 'logos:swift',
	Kotlin: 'logos:kotlin',
	Dart: 'logos:dart',

	// Frontend Frameworks
	React: 'logos:react',
	Vue: 'logos:vue',
	Angular: 'logos:angular-icon',
	Svelte: 'logos:svelte-icon',
	Solid: 'logos:solidjs-icon',

	// Backend & Runtime
	'Node.js': 'logos:nodejs-icon',
	// Express: 'logos:express-icon',
	Fastify: 'logos:fastify',
	NestJS: 'logos:nestjs',
	Deno: 'logos:deno',

	// Databases
	MongoDB: 'logos:mongodb-icon',
	PostgreSQL: 'logos:postgresql',
	MySQL: 'logos:mysql',
	Redis: 'logos:redis',
	Neo4j: 'logos:neo4j',

	// Cloud & DevOps
	AWS: 'logos:aws',
	Docker: 'logos:docker-icon',
	Kubernetes: 'logos:kubernetes',
	Firebase: 'logos:firebase',
	Vercel: 'logos:vercel-icon',
	Netlify: 'logos:netlify-icon',

	// Build Tools
	Vite: 'logos:vitejs',
	Webpack: 'logos:webpack',
	Rollup: 'logos:rollupjs',
	Parcel: 'logos:parcel-icon',

	// Testing
	Jest: 'logos:jest',
	Vitest: 'logos:vitest',
	Cypress: 'logos:cypress-icon',

	// Styling
	CSS: 'logos:css-3',
	Sass: 'logos:sass',
	'Tailwind CSS': 'logos:tailwindcss-icon',
	Bootstrap: 'logos:bootstrap',
	UnoCSS: 'logos:unocss',

	// Version Control
	Git: 'logos:git-icon',
	GitHub: 'logos:github-icon',

	// Design Tools
	Photoshop: 'logos:adobe-photoshop',
	Illustrator: 'logos:adobe-illustrator',
	'After Effects': 'logos:adobe-after-effects',
	'Premiere Pro': 'logos:adobe-premiere',

	// Other Tools
	Figma: 'logos:figma',
	Postman: 'logos:postman-icon',
	Slack: 'logos:slack-icon',
	Discord: 'logos:discord-icon',
	Notion: 'logos:notion-icon',

	// Fallback for unknown technologies
	Unknown: 'logos:html-5'
};

/**
 * Get the Iconify icon name for a given technology
 * @param name - The technology name
 * @returns The Iconify icon name or fallback
 */
export function getIconName(name: string): string {
	return iconMap[name] || iconMap['Unknown'];
}

/**
 * Check if a technology has an Iconify icon available
 * @param name - The technology name
 * @returns True if an icon is available
 */
export function hasIcon(name: string): boolean {
	return name in iconMap;
}

/**
 * Get all available technology names
 * @returns Array of technology names that have icons
 */
export function getAvailableTechnologies(): string[] {
	return Object.keys(iconMap).filter((key) => key !== 'Unknown');
}
