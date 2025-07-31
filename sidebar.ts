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
        text: "Notifications",
        link: "/docs/subscribe-notifications",
      },
      {
        text: "创建交易所凭证",
        collapsed: false,
        items: [
          {
            text: "币安",
            collapsed: false,
            items: [
              {
                text: "手机端API授权教程",
                link: "/docs/binance-phone-api",
              },
              {
                text: "PC端API授权教程",
                link: "/docs/binance-pc-api",
              },
            ],
          },
          {
            text: "Gate",
            collapsed: false,
            items: [
              {
                text: "手机端API授权教程",
                link: "/docs/gate-phone-api",
              },
              {
                text: "PC端API授权教程",
                link: "/docs/gate-pc-api",
              },
            ],
          },
          // {
          //   text: "Bybit",
          //   collapsed: false,
          //   items: [
          //     {
          //       text: "手机端API授权教程",
          //       link: "/docs/bybit-phone-api",
          //     },
          //     {
          //       text: "PC端API授权教程",
          //       link: "/docs/bybit-pc-api",
          //     },
          //   ],
          // },
          {
            text: "Bitget",
            collapsed: false,
            items: [
              {
                text: "手机端API授权教程",
                link: "/docs/bitget-phone-api",
              },
              {
                text: "PC端API授权教程",
                link: "/docs/bitget-pc-api",
              },
            ],
          },
        ],
      },
      {
        text: "谷歌验证器教程",
        link: "/docs/google-authenticator-tutorial",
      },
      {
        text: "Sniper Bot 部署指南",
        link: "/docs/sniper-bot-deployment",
      },
    ],
  },
} as const satisfies Sidebar;
