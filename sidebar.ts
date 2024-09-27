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
      // {
      //   text: "Guides",
      //   collapsed: false,
      //   items: [
      //     {
      //       text: "Example",
      //       link: "/docs/example",
      //     },
      //   ],
      // },
    ],
  },
} as const satisfies Sidebar;
