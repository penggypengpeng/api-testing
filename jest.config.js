/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "@quramy/jest-prisma-node/environment",
    testMatch: ["**/**/*.spec.ts"],
    verbose: true,
    forceExit: true,
    // clearMocks: true,
    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest",
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};
