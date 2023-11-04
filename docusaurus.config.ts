import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Quoll engine",
  tagline: "Easy to use game engine",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://quollengine.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "QuollEngine", // Usually your GitHub org/user name.
  projectName: "QuollEngine", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    async function tailwind(context, options) {
      return {
        name: "docusaurus-tailwind",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss")),
            postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          versions: {
            current: {
              label: "Prealpha",
            },
          },
          editUrl: "https://github.com/QuollEngine/Docs/edit/main",
          sidebarPath: require.resolve("./sidebars.ts"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Quoll Engine",
      logo: {
        alt: "Quoll Engine",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "manualSidebar",
          position: "left",
          label: "Editor manual",
        },
        {
          type: "docSidebar",
          sidebarId: "scriptingSidebar",
          position: "left",
          label: "Scripting API",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: "https://github.com/QuollEngine/QuollEngine",
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
              label: "Editor manual",
              to: "/docs/manual",
            },
            {
              label: "Lua API",
              to: "/docs/scripting",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/QuollEngine/QuollEngine",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Quoll Engine. Built by Gasim Gasimzada`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["lua"],
    },
  } satisfies Preset.ThemeConfig,
};

module.exports = config;
