## 项目说明

```
项目基于antd-pro定制，更加贴近生产项目，仅供学习
```

## 目录结构

```
├── public
│ └── logo.png # LOGO
| └── index.html # Vue 入口模板
├── src
│ ├── api # Api ajax 等
│ ├── assets # 本地静态资源
│ ├── config # 项目基础配置，包含路由，全局设置
│ ├── components # 业务通用组件
│ ├── core # 项目引导, 全局配置初始化，依赖包引入等
│ ├── router # Vue-Router
│ ├── store # Vuex
│ ├── utils # 工具库
│ ├── locales # 国际化资源
│ ├── views # 业务页面入口和常用模板
│ ├── App.vue # Vue 模板入口
│ └── main.js # Vue 入口 JS
│ └── permission.js # 路由守卫(路由权限控制)
├── tests # 测试工具
├── README.md
└── package.json
```

## 项目运行

- 安装依赖

```
yarn install
```

- 开发模式运行

```
yarn run serve
```

- 编译项目

```
yarn run build
```
