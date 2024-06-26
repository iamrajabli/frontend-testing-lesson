import nextJest from "next/jest";

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // <= setup file here
    testEnvironment: "jest-environment-jsdom",
    preset: 'ts-jest',
};

module.exports = createJestConfig(customJestConfig);