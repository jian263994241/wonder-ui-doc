// 配置文件内容
export default {
  // 配置项
  mode: 'site',
  title: 'Wonder UI',
  
  // logo: '',
  history: { type: 'hash' },
  outputPath: 'dist',
  publicPath: './',
  // dynamicImport: {
  //   loading: '@/Loading',
  // }, 
  resolve: {
    includes: [ 'docs', 'src' ]
  },
  menus: {
    '/guide': [{
      title: '入门教程',
      children: [
        '/guide/install',
        '/guide/getting-started',
      ],
    }],
    '/components': [{
      title: '通用',
      children: [
        '/components/button',
        '/components/icon',
        '/components/typography',
      ],
    }, {
      title: '布局',
      children: [
        './components/app',
        './components/view',
        './components/page',
        './components/block',
        './components/flex',
        './components/headerBar',
        './components/toolbar',
      ]
    }, {
      title: '导航',
      children: [
        './components/link',
      ]
    }, {
      title: '数据录入',
      children: [

      ]
    }, {
      title: '数据展示',
      children: [

      ]
    }, {
      title: '反馈',
      children: [

      ]
    }, {
      title: '其他',
      children: [
        
      ]
    }]
  },
  navs: [
    null,
    {
      title: 'v0.x',
      path: 'https://jian263994241.github.io/wonder-ui/styleguide',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/jian263994241/wonder-ui',
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
    'react-docgen'
  ],
};