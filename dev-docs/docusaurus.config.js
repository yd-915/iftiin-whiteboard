// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Iftiin-Board developer docs",
  tagline:
    "For Iftiin-Board contributors or those integrating the Iftiin-Board editor",
  url: "https://docs.excalidraw.com.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/board.png",
  organizationName: "Iftiin-Board", // Usually your GitHub org/user name.
  projectName: "iftiin-base", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/excalidraw/docs/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Iftiin-Board Docs",
        logo: {
          alt: "Iftiin-Board Logo",
          src: "img/board.png",
        },
        items: [
          {
            type: "doc",
            docId: "get-started",
            position: "left",
            label: "Get started",
          },
          {
            to: "https://blog.Iftiin-Board.com",
            label: "Blog",
            position: "left",
          },
          {
            to: "https://github.com/excalidraw/excalidraw",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/docs/get-started",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/UexuTaE",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/excalidraw",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://blog.excalidraw.com",
              },
              {
                label: "GitHub",
                to: "https://github.com/excalidraw/excalidraw",
              },
            ],
          },
        ],
        copyright: `Made with ❤️ Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
