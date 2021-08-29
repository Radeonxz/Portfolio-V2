const path = require(`path`);

module.exports = {
	siteMetadata: {
		title: "v2",
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-ts",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-image",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: path.join(__dirname, `src`, `images`),
			},
		},
	],
};
