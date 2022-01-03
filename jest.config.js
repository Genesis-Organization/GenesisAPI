/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'node',
  modulePaths: ['node_modules', 'src'],
  moduleDirectories: ['node_modules', 'src', 'test', '.'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  transform: {
    '^.+\\.ts?$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
}
