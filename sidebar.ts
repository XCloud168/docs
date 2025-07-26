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
          {
            text: "币安手机端API授权教程",
            link: "/docs/binance-phone-api",
          },
          {
            text: "币安PC端API授权教程",
            link: "/docs/binance-pc-api",
          },
        ],
      },
    ],
  },
} as const satisfies Sidebar;
