module.exports = {
	siteMetadata: {
		title: "v2",
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-ts",
		"gatsby-plugin-sharp",
		"gatsby-plugin-image",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images/`,
			},
		},
	],
};
