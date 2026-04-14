
Vue3 路由演示项目

 📖 项目描述
基于 Vue3+ JavaScript 构建的单页面应用（SPA）演示项目。通过 Vue Router 实现页面无刷新切换与组件动态替换，并全新集成响应式轮播图组件，适用于学习 Vue3 路由机制、组件通信及常见前端交互效果。
✨ 核心功能
 🛣️ 动态路由切换：基于 Vue Router 4 实现多视图自由替换、嵌套路由与参数传递
 🖼️ 响应式轮播图：支持自动播放、手动切换、指示器导航与平滑过渡动画
 ⚡ Vue3 特性实践：采用 Composition API、响应式系统与组件化开发
 📦 标准化工程流：使用 Yarn 管理依赖，支持热更新 (HMR) 与高效构建
🛠 技术栈
Vue 3.x + JavaScript (ES6+)
Vue Router 4.x
Yarn 包管理器
（轮播图实现：原生 CSS/JS 封装 / 第三方组件，可按实际实现方式调整）

📦 环境要求
Node.js >= 16.0.0
Yarn >= 1.22.0
> 💡 请确保已全局安装 Node.js 与 Yarn，可通过 node -v 和 yarn -v验证版本。

🚀 快速开始

1. 获取项目
下载或克隆本项目到本地目录。

2. 安装依赖
在项目根目录下执行：
yarn
3. 启动开发服务器
依赖安装完成后，运行以下命令启动项目：
yarn dev
终端将输出本地访问地址（通常为 http://localhost:5173 或 http://localhost:8080），浏览器打开即可预览。

🔧 附：路由依赖说明
本项目已内置 vue-router@4 并完成配置。若在新项目中从零集成，请执行：
yarn add vue-router@4
📁 项目结构（参考）
src/
├── assets/          # 静态资源（图片、样式等）
├── components/      # 公共组件（含轮播图组件 Carousel）
├── router/          # 路由配置文件 (index.js)
├── views/           # 页面级视图组件
├── App.vue          # 根组件 & 路由出口 <router-view>
└── main.js          # 入口文件 & 路由实例挂载
📝 开发与使用提示
路由跳转：模板中使用 <router-link to="/path">，逻辑中使用 router.push('/path')
轮播图组件：已封装为独立组件，可通过 <Carousel /> 直接引入，支持传入 images、interval、showDots 等
Vue3路由演示
项目描述
基于 Vue3、JS 框架的 " Vue3路由演示项目 "，通过 Vue 组件实现页面自由替换。

一、提前安装好 nodejs 与 yarn,下载项目后在项目主目录下运行 yarn 拉取依赖包。
安装完依赖包之后然后使用 vue-cli 或者直接使用命令npm run serve，就可以启动项目，
二、yarn安装依赖：
yarn
三、启动开发服务器命令：
yarn dev
yarn路由安装命令：
yarn add vue-router@4
