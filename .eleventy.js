module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("icons");
    eleventyConfig.addPassthroughCopy("css");
    

  
module.exports = function(eleventyConfig) {
    return {
      templateFormats: ["njk", "html", "md"],
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    }
  };
}; 