// module.exports = {
//     moduleNameMapper: {
//       '^react$': 'preact/compat',
//       '^react-dom/test-utils$': 'preact/test-utils',
//       '^react-dom$': 'preact/compat',
//     },
//   };

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ['C:/Users/muska/Documents/RipeMetrics/rtk_pokemon_app/my-app/__tests__/jest.setup.ts'], 
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
