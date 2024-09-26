import type { Sidebar } from "vocs";

export const sidebar = {
  "/docs/": {
    backLink: true,
    items: [
      {
        text: "Getting Started",
        link: "/docs/getting-started",
      },
      {
        text: "Example",
        link: "/docs/example",
      },
      {
        text: "Guides",
        collapsed: false,
        items: [
          {
            text: "Example",
            link: "/docs/example",
          },
        ],
      },
    ],
  },
} as const satisfies Sidebar;
