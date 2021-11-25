// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '川渝文化数字档案馆',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '川渝文化',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://oa.casbin.com/',
            label: '登录 | 注册',
            position: 'right'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '服务指南',
          },
          {to: '/blog', label: '工作概况', position: 'left'},
          {
            type: 'dropdown',
            label: '特色专题',
            position: 'left',
            items: [
              {
              label: '🫕 美食',
              to: '/eating'
              },
              {
                label: '🎶 戏曲',
                to: 'music'
              }
            ]
          },
          {
            label: '资源概览',
            to: 'resources'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '友情链接',
            items: [
              {
                label: '山东大学',
                to: 'https://www.sdu.edu.cn/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 山东大学川渝文化数字档案馆.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
