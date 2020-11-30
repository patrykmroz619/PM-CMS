module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "@utils/(.*)$": "<rootDir>/src/utils/$1",
    "@myStyled": "<rootDir>/src/style",
    "@common": "<rootDir>/src/common",
    "@assets/(.*)$": "<rootDir>/src/assets/$1",
    "@api/(.*)$": "<rootDir>/src/api/$1",
    "@selectors": "<rootDir>/src/store/selectors",
    "@fetch": "<rootDir>/src/store/fetch",
    "@views/(.*)$": "<rootDir>/src/views/$1",
    "@validators/(.*)$": "<rootDir>/src/validators/$1"
  }
};
