module.exports = {
    roots: ["<rootDir>"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/test/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "js"],
    testEnvironment: "node"
};
