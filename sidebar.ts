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
        text: "Tutorials",
        link: "/docs/tutorials",
      },
      // {
      //   text: "Notifications",
      //   link: "/docs/subscribe-notifications",
      // },
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
            text: "OKX",
            collapsed: false,
            items: [
              {
                text: "手机端API授权教程",
                link: "/docs/okx-phone-api",
              },
              {
                text: "PC端API授权教程",
                link: "/docs/okx-pc-api",
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
          {
            text: "火币",
            collapsed: false,
            items: [
              {
                text: "手机端API授权教程",
                link: "/docs/huobi-phone-api",
              },
              {
                text: "PC端API授权教程",
                link: "/docs/huobi-pc-api",
              },
            ],
          },
          {
            text: "Bybit",
            collapsed: false,
            items: [
              {
                text: "PC端API授权教程",
                link: "/docs/bybit-pc-api",
              },
            ],
          },
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
        text: "买入及提现BNB教程",
        link: "/docs/buy-and-withdraw-bnb",
      },
      {
        text: "Sniper Bot 部署指南",
        link: "/docs/sniper-bot-deployment",
      },
    ],
  },
} as const satisfies Sidebar;
