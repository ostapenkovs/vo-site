module.exports = {
  siteMetadata: {
    siteUrl: "https://vasylostapenko.com",
    title: "Vasyl Ostapenko",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "vasylostapenko.com",
        protocol: "https",
        hostname: "vasylostapenko.com",
      },
    },
  ]
};
