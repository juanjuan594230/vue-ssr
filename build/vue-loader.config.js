module.exports = function (isDev) {
  return {
    preserveWhitespace: true, // .vue文件的template中的html标签之间的空格去掉
    extractCSS: !isDev, // 使用extract-text-webpack-plugin自动提取CSS，包括.vue中的style样式
    cssModules: {
      localIdentName: isDev ? '[path].[name].[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
  };
};
