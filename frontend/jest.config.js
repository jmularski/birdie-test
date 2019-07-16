module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  "moduleNameMapper": {
    "^react-native$": "react-native-web",
    "@App/(.*)": "<rootDir>/src/$1",
    "@store/(.*)": "<rootDir>/src/store/$1"
  }
}