/* craco.config.js */
const CracoLessPlugin = require("craco-less");
const { getThemeVariables } = require("antd/dist/theme");
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { "@primary-color": "#1DA57A" },
            modifyVars: getThemeVariables({
              dark: false, // 开启暗黑模式
              compact: false, // 开启紧凑模式
            }),
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
