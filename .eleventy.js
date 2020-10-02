/*
Copyright the eleventy-plugin-fluid copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/eleventy-plugin-fluid/raw/main/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/fluid-project/eleventy-plugin-fluid/raw/main/LICENSE.md.
*/
"use strict";

var formatDateFilter = require("./src/filters/format-date-filter.js");
var isoDateFilter = require("./src/filters/iso-date-filter.js");
var limitFilter = require("./src/filters/limit-filter.js");
var markdownFilter = require("./src/filters/markdown-filter.js");
var slugFilter = require("./src/filters/slug-filter.js");
var splitFilter = require("./src/filters/split-filter.js");

module.exports = function(eleventyConfig) {
	eleventyConfig.addFilter("formatDate", formatDateFilter);
	eleventyConfig.addFilter("isoDate", isoDateFilter);
	eleventyConfig.addFilter("limit", limitFilter);
	eleventyConfig.addFilter("markdown", markdownFilter);
	eleventyConfig.addFilter("slug", slugFilter);
    eleventyConfig.addFilter("split", splitFilter);
};
