import type { Sidebar } from "vocs";

export const sidebar = {
  "/docs/": {
    backLink: true,
    items: [
      {
        text: "Introduction",
        link: "/docs/introduction",
      },
      {
        text: "References",
        link: "/docs/references",
      },
      {
        text: "Guides",
        collapsed: false,
        items: [
          {
            text: "Notifications",
            link: "/docs/subscribe-notifications",
          },
        ],
      },
    ],
  },
} as const satisfies Sidebar;
