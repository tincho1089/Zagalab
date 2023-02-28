const nextJest = require('next/jest')
const path = require('path')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/services/(.*)$': '<rootDir>/services/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    // Add mapping for other custom modules
    '^components/(.*)$': path.join(__dirname, 'components', '$1'),
    '^app/(.*)$': path.join(__dirname, 'app', '$1'),
    '^services/(.*)$': path.join(__dirname, 'services', '$1'),
  },
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
