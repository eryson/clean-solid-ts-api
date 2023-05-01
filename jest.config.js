module.exports = {
  roots: ["<rootDir>/__tests__"],
  // collectCoverage: false,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  // coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  // moduleNameMapper: {
  //   "@/(.*)": "<rootDir>/src/$1",
  // },
};
