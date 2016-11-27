
var config = {
    removeNewLineRegex: /(?:\r\n|\r|\n)/g,
    css: {
        srcFiles: [
            'css/style.css'
        ],
        dstFolder: '_site/css/',
        watchFiles: [
            '_site/css/'
        ]
    },
    view: {
        srcFiles: '**/*.pug',
        watchFiles: [
            '**/*.pug'
        ],
        dstFiles: '_site',
    },
    blog: {
        inputFolder: '_posts',
        postSrc: '_posts/**/*.md',
        indexTemplate: '_blog/index.pug',
        blogPageTemplate: '_blog/blogPage.pug',
        indexOutput: '_site/blog/index.html',
        outputRootFolder: '_site/',
        regex: /^---\r?\n([\s\S]*)---\r?\n([\s\S]*)\r?\n<!--MORE-->([\s\S]*)/gm
    },
    headerMenuItems: {
        home: {
            url: '/',
            name: '/home'
        },
        blog: {
            url: '/blog',
            name: '/blog'
        },
        tango: {
            url: '/tango',
            name: '/tango'
        }
    },
    socialMenuItems: {
        twitter: {
            iconSrc: 'twitter.svg',
            url: '#tw'
        },
        github: {
            iconSrc: 'github.svg',
            url: '#gh'
        },
        mail: {
            iconSrc: 'mail.svg',
            url: '#gh'
        },
        linkedin: {
            iconSrc:'in.svg',
            url: '#in'
        }
    }
};

module.exports = config;
