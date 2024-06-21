module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-navigation|@react-native)',
  ],
  setupFiles: ['<rootDir>/setup-jest.js'],
};
