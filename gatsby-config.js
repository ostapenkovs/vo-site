module.exports = {
  siteMetadata: {
    siteUrl: "https://www.vasylostapenko.com",
    title: "Vasyl Ostapenko",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "vasylostapenko.com",
      },
    },
  ]
};
