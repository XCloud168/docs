import react from "@vitejs/plugin-react";

import { defineConfig } from "vocs";
import { sidebar } from "./sidebar";

export default defineConfig({
  title:
    "Masbate | AI-powered Web3 Investment Analysis Platform to Enhance Success Rates",
  logoUrl: {
    light: "/logo-light.svg",
    dark: "/logo.svg",
  },
  description:
    "Masbate is an AI-driven Web3 investment analysis platform that evaluates Web3 KOL call quality, provides real-time market insights, and captures accurate investment signals 24/7 to help users make efficient decisions and create a comprehensive investment loop.",
  ogImageUrl:
    "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  editLink: {
    text: "Suggest changes to this page",
    pattern: "https://github.com/xcloud168/docs/edit/main/docs/pages/:path",
  },
  theme: {
    variables: {
      color: {
        background: {
          light: "#FFFFFF",
          dark: "#000000",
        },
        backgroundAccent: {
          light: "#09CB6F",
          dark: "#09CB6F",
        },
        backgroundAccentHover: {
          light: "#37A758",
          dark: "#37A758",
        },
        borderAccent: {
          light: "#09CB6F",
          dark: "#09CB6F",
        },
        textAccent: {
          light: "#09CB6F",
          dark: "#09CB6F",
        },
      },
    },
  },
  head() {
    return (
      <>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D3ZZ8HWHGB"
        ></script>
      </>
    );
  },
  sidebar,
  topNav: [
    {
      text: "Getting Started",
      link: "/docs/getting-started",
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
    resolve: {
      conditions: ["dev"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
          silenceDeprecations: ["mixed-decls"],
        },
      },
    },
    plugins: [react()],
  },
});
