module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect", "jest-styled-components"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.ts",
    "\\.svg$": "<rootDir>/src/__mocks__/SvgComponentMock.tsx",
    "@utils/(.*)$": "<rootDir>/src/utils/$1",
    "@myStyled": "<rootDir>/src/style",
    "@common": "<rootDir>/src/components/common",
    "@api/(.*)$": "<rootDir>/src/api/$1",
    "@selectors": "<rootDir>/src/store/selectors",
    "@fetch": "<rootDir>/src/store/fetch",
    "@fetch": "<rootDir>/src/store/actions.ts",
    "@pages/(.*)$": "<rootDir>/src/components/pages/$1",
    "@validators/(.*)$": "<rootDir>/src/validators/$1",
    "@testHelpers": "<rootDir>/src/__test__/helpers",
    "@mocks/(.*)$": "<rootDir>/src/__mocks__/$1",
    "@content": "<rootDir>/src/content",
    "@hooks": "<rootDir>/src/hooks",
    "@routes": "<rootDir>/src/routes"
  }
};
