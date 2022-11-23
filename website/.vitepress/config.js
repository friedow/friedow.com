export default {
  head: [
    // ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png", },],
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
    ],
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon.png" },
    ],
    // ["link", { rel: "manifest", href: "/favicons/site.webmanifest" }], ["link", { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#5bbad5", },],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    // ["meta", { name: "msapplication-TileColor", content: "#2b5797" }],
    // ["meta", { name: "msapplication-config", content: "/favicons/browserconfig.xml" },],
    // ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
  title: "friedow",
  description: "custom-made code",
  themeConfig: {
    navbar: {
      logo: "/images/friedow.svg",
      links: [
        {
          text: "About Me",
          href: "/#profile",
        },
        { text: "Projects", href: "/#projects" },
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
