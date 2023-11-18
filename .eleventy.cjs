module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true,
  });
  return {
    dir: {
      includes: "_includes",
      data: "_data",
      output: "dist"
    }
  }
};
