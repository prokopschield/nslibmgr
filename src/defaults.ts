export const CLOUD_HANDLER_IGNORE = [
	'.',
	'..',
	'.env',
	'.git',
	'config',
	'modules',
	'node_modules',
];

export const CLOUD_HANDLER_KEEP = [
	'docs',
	'examples',
	'dist',
	'lib',
	'public',
	'prisma',
	'src',
	'test',
	'tests',
	'types',
	'util',
	'package.json',
	'index.js',
	'index.ts',
	'index.d.ts',
	'app.js',
	'app.ts',
	'app.d.ts',
	'gpl-3.0.md',
	'LICENSE.md',
	'LICENSE',
	'README.md',
	'README.txt',
	'SECURITY.md',
	'CONSTRIBUTING.md',
	'CHANGELOG.md',
	'CODE_OF_CONDUCT.md',
	'DESIGN_GUIDELINES.md',
	'.gitmodules',
	'.gitignore',
	'.npmignore',
	'.eslintignore',
	'.prettierignore',
	'.prettierrc.js',
	'.commitlint.config.js',
	'.editorconfig',
	'.whitesource',
	'.vscode',
	'.github',
	'tsconfig.json',
	'yarn.lock',
];

export const CLOUD_HANDLER_UNLINK = ['package-lock.json'];

export default {
	CLOUD_HANDLER_IGNORE,
	CLOUD_HANDLER_KEEP,
	CLOUD_HANDLER_UNLINK,
};
