const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addCollection("products", (collection) => {
        return collection.getFilteredByGlob("_products/**/*.md");
    });

    eleventyConfig.addPassthroughCopy('assets')
    return {
        templateFormats: [
            "md",
            "ejs",
            "css",
            "svg",
            "png",
            "njk"
        ],
        passthroughFileCopy: true,
    };
}