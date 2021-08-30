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
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				start_url: "/",
				display: "standalone",
				icon: "src/images/gatsby-icon.png",
			},
		},
	],
};
