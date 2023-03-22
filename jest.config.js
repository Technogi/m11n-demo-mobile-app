module.exports = {
  preset: "react-native",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  transformIgnorePatterns: [
    "jest-runner"
  ],
  setupFiles: [
    "./src/jest/jest-setup.ts"
  ],
}
