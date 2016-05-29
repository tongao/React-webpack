#  React-webpack
基于[Webpack](http://webpack.github.io/),[Babel](https://babeljs.io/) 配置的React简单开发环境;支持使用ES2015.




### 项目目录
```
├── README.md
├── build
│   ├── bundle.js
│   └── bundle.js.map
├── index.html
├── node_modules
├── package.json
├── src
│   ├── css
│   ├── img
│   └── js
├── webpack.build.babel.js
├── webpack.config.babel.js
└── webpack.loaders.js
```


### 开始使用

* 首页确保系统中已经安装 [git](https://git-scm.com/) 和 [node](https://nodejs.org/en/) (* 此配置需要node4.0以上版本)
* 然后克隆项目到本地

```
> $ git clone https://github.com/tongao/React-webpack.git
```


然后安装依赖模块:

```
> $ npm install
```

安装webpack和webpack-dev-server到系统全局:

```
> $ npm i webpack-dev-server webpack -g
```


键入以下命令运行webpack服务:

```
> $ npm start
```

在浏览器中打开 `http://127.0.0.1:3000`

打包发布键入以下命令:

```
> $ npm run build
```


(๑＞ڡ＜)
