module.exports = {
	setupFiles: ['<rootDir>/jest.setup.js'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	moduleNameMapper: {
		'\\.scss$': 'identity-obj-proxy'
	}
}
