import type { Sidebar } from "vocs";

export const sidebar = {
  "/docs/": {
    backLink: true,
    items: [
      {
        text: "Masbate 介绍",
        link: "/docs/introduction",
      },
      {
        text: "Masbate 注册",
        link: "/docs/tutorials",
      },
      {
        text: "Sniper Bot 部署教程",
        link: "/docs/sniper-bot-deployment",
      },
      // {
      //   text: "Notifications",
      //   link: "/docs/subscribe-notifications",
      // },
      {
        text: "交易所账户注册",
        collapsed: false,
        items: [
          {
            text: "币安",
            link: "/docs/binance-register",
          },
          {
            text: "OKX",
            link: "/docs/okx-register",
          },
          {
            text: "Gate",
            link: "/docs/gate-register",
          },
          {
            text: "Bitget",
            link: "/docs/bitget-register",
          },
        ],
      },
      {
        text: "钱包账户创建",
        collapsed: false,
        items: [
          {
            text: "OKX钱包 - PC端",
            link: "/docs/okx-wallet-pc",
          },
          {
            text: "OKX钱包 - 手机端",
            link: "/docs/okx-wallet-phone",
          },
          {
            text: "Metamask钱包 - PC端",
            link: "/docs/metamask-wallet-pc",
          },
          {
            text: "Phantom钱包 - PC端",
            link: "/docs/phantom-wallet-pc",
          },
        ],
      },
      {
        text: "创建交易所API凭证",
        collapsed: false,
        items: [
          {
            text: "币安",
            collapsed: true,
            items: [
              {
                text: "币安 - 手机端API授权教程",
                link: "/docs/binance-phone-api",
              },
              {
                text: "币安 - PC端API授权教程",
                link: "/docs/binance-pc-api",
              },
            ],
          },
          {
            text: "OKX",
            collapsed: true,
            items: [
              {
                text: "OKX - 手机端API授权教程",
                link: "/docs/okx-phone-api",
              },
              {
                text: "OKX - PC端API授权教程",
                link: "/docs/okx-pc-api",
              },
            ],
          },
          {
            text: "Gate",
            collapsed: true,
            items: [
              {
                text: "Gate - 手机端API授权教程",
                link: "/docs/gate-phone-api",
              },
              {
                text: "Gate - PC端API授权教程",
                link: "/docs/gate-pc-api",
              },
            ],
          },
          {
            text: "火币",
            collapsed: true,
            items: [
              {
                text: "火币 - 手机端API授权教程",
                link: "/docs/huobi-phone-api",
              },
              {
                text: "火币 - PC端API授权教程",
                link: "/docs/huobi-pc-api",
              },
            ],
          },
          {
            text: "Bybit",
            collapsed: true,
            items: [
              {
                text: "Bybit - PC端API授权教程",
                link: "/docs/bybit-pc-api",
              },
            ],
          },
          {
            text: "Bitget",
            collapsed: true,
            items: [
              {
                text: "Bitget - 手机端API授权教程",
                link: "/docs/bitget-phone-api",
              },
              {
                text: "Bitget - PC端API授权教程",
                link: "/docs/bitget-pc-api",
              },
            ],
          },
        ],
      },
      {
        text: "谷歌验证器安装",
        link: "/docs/google-authenticator-tutorial",
      },
      {
        text: "其他",
        collapsed: true,
        items: [
          {
            text: "交易所邀请码及注册链接",
            link: "/docs/exchange-referral-codes",
          },
          {
            text: "BNB买入及提现教程",
            link: "/docs/buy-and-withdraw-bnb",
          },
        ],
      },
    ],
  },
} as const satisfies Sidebar;
