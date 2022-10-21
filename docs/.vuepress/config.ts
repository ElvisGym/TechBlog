import {defaultTheme, defineUserConfig} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'TurboGYM!',
    description: 'Study hard and you\'ll improve everyday.',
    head: [['link', {rel: 'icon', href: '/images/favicon.png'}]],
    theme: defaultTheme({
        // URL
        logo: '/images/favicon.png',
        navbar: [
            // NavbarItem
            {
                text: 'Home',
                link: '/',
            },
            {
                text: '我的笔记',
                link: '/start/start.md',
            }, {
                text: 'Mac技巧',
                link: '/mac/start.md',
            }
        ],
        sidebar: {
            '/mac/': [
                // 字符串 - 页面文件路径
                '/mac/start.md',
                // SidebarItem
                {
                    text: 'Mac',
                    link: '/mac/',
                    children: [
                        // SidebarItem
                        {
                            text: 'MacBookPro M1 安装 VMware Fusion 及 CentOS 8',
                            link: '/mac/VMwareFusion.md'
                        }, {
                            text: 'Mac使用npm安装包，完成后显示命令找不到',
                            link: '/mac/Mac_npm.md'
                        }, {
                            text: 'Docker配置MySQL',
                            link: '/mac/docker_mysql.md'
                        }
                    ],
                },

            ],
        },
        repo: 'turbogym/TechBlog',
        docsBranch: 'main/docs',
        editLinkText: "编写文档",
        lastUpdated: true,
        lastUpdatedText: '上次更新',
        backToHome: '返回博客首页',
        notFound: ['萧萧梧叶送寒声 江上秋风动客情', '五月畲田收火米 三更津吏报潮鸡', '女娲炼石补天处 石破天惊逗秋雨', '家家乞巧望秋月 穿尽红丝几万条', '愁作秋浦客 强看秋浦花'],
        toggleSidebar: 'toggle sidebar'
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索文档',
                }
            },
        }),
    ],
})