module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["react-native-reanimated/plugin"],
      // ["@babel/plugin-transform-class-properties", { "loose": true }],
      // ["@babel/plugin-transform-private-methods", { "loose": true }],
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
          safe: true,
          allowUndefined: true,
          verbose: false,
        },
      ],
    ],
  };
};
