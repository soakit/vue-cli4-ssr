# 1.安装`vue-cli`

```shell
npm install -g @vue/cli
```

> vue-cli 4.5.12

选择 `Default ([Vue 2] babel, eslint)`

# 2.安装`commitizen`

```shell
npm install -g commitizen
commitizen init cz-conventional-changelog --save --save-exact
```

> 提交姿势
> git add . && git cz

# 3.安装依赖

```shell
npm i vue-router vuex -s
npm i vue-server-renderer express webpack-node-externals lodash.merge -D
```

# 4.开发与打包

```shell
npm run serve # 开发
npm run build # 生产打包
```

# 参考资料

https://www.jianshu.com/p/36d970a2b4da
http://www.huhaowb.com/2019/12/10/SSR%E6%8A%A5%E9%94%99-Error/
