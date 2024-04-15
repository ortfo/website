import { DefaultTheme, defineConfig } from "vitepress"
import footnote from "markdown-it-footnote"
import deflists from "markdown-it-deflist"
import { faviconHead } from "./favicon"

const ortfodbSidebar = [
  {
    text: "Introduction",
    items: [
      {
        text: "Getting started",
        link: "/db/getting-started",
      },
      {
        text: "Your first description.md file",
        link: "/db/your-first-description-file",
      },
      {
        text: "Database format",
        link: "/db/database-format",
      },
    ],
  },
  {
    text: "Features",
    items: [
      {
        text: "Scattered mode",
        link: "/db/scattered-mode",
      },
      {
        text: "Markdown",
        link: "/db/markdown",
      },
      {
        text: "Tags",
        link: "/db/tags",
      },
      {
        text: "Technologies",
        link: "/db/technologies",
      },
      {
        text: "Internationalization",
        link: "/db/internationalization",
      },
      {
        text: "Thumbnail generation",
        link: "/db/thumbnails",
      },
      {
        text: "Primary colors extraction",
        link: "/db/colors",
      },
      {
        text: "Complex layouts",
        link: "/db/layouts",
      },
      {
        text: "JSON Schemas",
        link: "/db/json-schemas",
      },
    ],
  },
  {
    text: "Exporters",
    base: "/db/exporters/",
    items: [
      {
        text: "Introduction",
        link: "/",
      },
      {
        text: "Built-in exporters (SSH, FTP, Git, Cloud services)",
        link: "/builtin",
      },
      {
        text: "The custom exporter",
        link: "/custom",
      },
      {
        text: "Writing your own exporter",
        link: "/development",
      },
    ],
  },
  {
    text: "CLI Reference",
    base: "/db/commands/",
    collapsed: true,
    items: [
      { text: "Global options", link: "/" },
      { text: "add", link: "/add" },
      { text: "build", link: "/build" },
      { text: "schemas", link: "/schemas" },
      { text: "replicate", link: "/replicate" },
      { text: "completion", link: "/completion" },
    ],
  },
  {
    text: "Type definitions for Python, Rust and TypeScript",
    link: "/db/client-libraries",
  },
] satisfies DefaultTheme.SidebarItem[]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "ortfo",
  description: "Make & manage your own homemade portfolio easily",
  head: [
    ...faviconHead(),
    [
      "script",
      {
        defer: "defer",
        "data-domain": "ortfo.org",
        src: "https://stats.ewen.works/js/script.js",
      },
    ],
  ],
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    config: (md) => {
      md.use(footnote)
      md.use(deflists)
    },
  },
  themeConfig: {
    search: {
      provider: "local",
      // Waiting for approval from Algolia
      // provider: "algolia",
      // options: {
      //   appId: "5FWPVQPO1Y",
      //   apiKey: "9d51aebe9f31527c9dce65244aeb221b",
      //   indexName: "ortfo-website",
      // },
    },
    editLink: {
      pattern: "https://github.com/ortfo/website/edit/main/:path",
    },
    logo: {
      dark: "/logo-dark.svg",
      light: "/logo-light.svg",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "ortfo/db", link: "/db/" },
    ],

    outline: {
      level: "deep",
    },

    sidebar: {
      "/db/": ortfodbSidebar,
      "/guide/": [
        {
          base: "/guide/",
          text: "Getting started",
          items: [
            { text: "What is ortfo?", link: "/what-is-ortfo" },
            { text: "Quick start", link: "/getting-started" },
          ],
        },
        {
          text: "ortfo/db 🗄",
          items: ortfodbSidebar,
        },
        {
          text: "ortfo/mk 📦",
          items: [{ text: "To be done…", link: "/work-in-progress" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/ortfo" }],
  },
})
