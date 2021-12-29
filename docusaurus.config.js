// @ts-nocheck

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Black Ravine',
  tagline: 'Bring the real future',
  url: process.env.SITE_URL != null ? process.env.SITE_URL : 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logowhite.svg',
  organizationName: 'Black Ravine', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/winstonsec/docs-public-blackravine/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/winstonsec/docs-public-blackravine/',
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'Black Ravine',
        logo: {
          alt: 'Black Ravine Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'}, // para habilitar o blog novamente
          // {
          //   href: 'https://github.com/winstonsec/docs-public-blackravine',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/jonatas_winston/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Jonatas_Winston',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/jonataswinston/',
              },
              {
                label: 'More',
                href: 'https://linktr.ee/wnst',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/winstonsec',
              },
            ],
          },
          {
            title: 'Sites',
            items: [
              {
                label: 'Black Ravine',
                href: 'https://blackravine.com',
              },
              {
                label: 'Retriy',
                href: 'https://retriy.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Black Ravine.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
