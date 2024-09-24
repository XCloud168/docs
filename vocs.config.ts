import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vocs";

export default defineConfig({
  title: "Masbate Docs",
  logoUrl: {
    light: "/logo-light.svg",
    dark: "/logo.svg",
  },
  description: "",
  ogImageUrl:
    "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Example",
      link: "/example",
    },
    {
      text: "Guides",
      collapsed: false,
      items: [
        {
          text: "Example",
          link: "/example",
        },
      ],
    },
  ],
  topNav: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Blog",
      link: "/blog",
    },
    {
      text: "Website",
      link: "https://www.masbate.xyz",
    },
  ],
  socials: [
    {
      icon: "x",
      link: "https://x.com/masbateofficial",
    },
    {
      icon: "discord",
      link: "https://discord.gg/Fe6m3ew3",
    },
  ],
  vite: {
    plugins: [tsconfigPaths()],
  },
});
