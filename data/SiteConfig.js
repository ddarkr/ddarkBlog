const config = {
  siteTitle: "ddarkBlog",
  siteTitleShort: "dB",
  siteTitleAlt: "ddarkBlog",
  siteLogo: "/logos/logo.png",
  siteUrl: "https://blog.ddark.kr",
  repo: "https://github.com/ddarkr/ddarkBlog",
  pathPrefix: "",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "YYYY.MM.DD.",
  siteDescription: "도다의 개인 기술 블로그.",
  siteRss: "/rss.xml",
  googleAnalyticsID: "UA-135920907-3",
  disqusShortname: "ddarkblog",
  postDefaultCategoryID: "",
  userName: "ddark",
  userEmail: "ddark.kr@gmail.com",
  userTwitter: "",
  userLocation: "Seoul, South Korea",
  userDescription: "도다의 개인 기술 블로그.",
  menuLinks: [
    {
      name: "articles",
      link: "/articles",
    },
    {
      name: "tags",
      link: "/tags",
    },
  ],
  themeColor: "#3F80FF", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff",
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = ""
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`

module.exports = config
