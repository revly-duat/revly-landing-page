/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.revly.se",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["https://brand.revly.se/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
