// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const renderer = require("prism-react-renderer");
const lightCodeTheme = renderer.themes.github;
const darkCodeTheme = renderer.themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "llamaflowjs",
  tagline:
    "llamaflowjs is a framework that has inbuilt agentic workflows,reiterative reflection and llm review system making it a true framework for llm applications",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://llamaflowjs.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "LlamaFlowJs", // Usually your GitHub org/user name.
  projectName: "LlamaFlowJs", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        blog: {
          blogTitle: "llamaflowjs blog",
          blogDescription: "The official blog of llamaflowjs",
          postsPerPage: "ALL",
        },
        gtag: {
          trackingID: "G-NB9B8LW9W5",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/favicon.ico", // TODO change this
      navbar: {
        title: "llamaflowjs",
        logo: {
          alt: "llamaflowjs",
          src: "img/favicon.ico",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "mySidebar",
            position: "left",
            label: "Docs",
          },
          {
            type: "localeDropdown",
            position: "left",
          },
          { to: "blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/LlamaFlowJs/LlamaFlowJs",
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
                label: "API",
                to: "/api",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/WWcNbXrH",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/llamaflowjs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/LlamaFlowJs/LlamaFlowJs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} llamaflowjs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "DYKPM6G4CX",

        // Public API key: it is safe to commit it
        apiKey: "c4ff3789f20bb72a5d735082aef17719",

        indexName: "llamaflowjs",

        // Optional: see doc section below
        contextualSearch: true,
      },
    }),
  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: ["../../packages/llamaflowjs/src/index.ts"],
        tsconfig: "../../tsconfig.json",
        readme: "none",
        sourceLinkTemplate:
          "https://github.com/LlamaFlowJs/LlamaFlowJs/blob/{gitRevision}/{path}#L{line}",
        sidebar: {
          position: 6,
        },
      },
    ],
  ],
  markdown: {
    format: "detect",
  },
};

module.exports = config;
