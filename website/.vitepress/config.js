export default {
  head: [
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
    ],
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon.png" },
    ],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#d69145" }],
    ["meta", { name: "theme-color", content: "#d69145" }],
  ],
  title: "friedow",
  description: "custom-made code",
  appearance: false,
  themeConfig: {
    navbar: {
      logo: "/images/friedow.svg",
      links: [
        {
          text: "About Me",
          href: "/#profile",
        },
        { text: "Open Source", href: "/#open-source" },
      ],
    },
    footer: {
      copyright: {
        author: "Christian Friedow",
      },
      links: [
        {
          text: "Impressum & Datenschutz",
          href: "/impressum-und-datenschutz",
        },
      ],
    },
  },
};
