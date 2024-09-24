import { defineConfig } from "vocs";

export default defineConfig({
  title: "Masbate Docs",
  logoUrl: "/logo.svg",
  description: "",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Example",
      link: "/example",
    },
  ],
  topNav: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Website",
      link: "https://www.masbate.xyz",
    },
  ],
});
