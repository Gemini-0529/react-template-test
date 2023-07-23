### React + Ts + antd 后台管理系统模板

#### 找不到模块
> npm i @types/node -D

#### 找不到第三方包
1. tsconfig.json同级新建一个types文件夹
2. 新建文件 xxx.d.ts
3. 文件内写入
> declare module 'xxx'

4. tsconfig.json  include中加入 types

#### 配置了文件路径别名，不提示文件夹下资源
```json
// tsconfig.json
compilerOptions: {
   "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
}
```

#### 无法使用 JSX，除非提供了 "--jsx" 标志。
> tsconfig.json -> "jsx": "preserve",

#### 绝不要在tsx文件中直接引入css文件
** 在tsx文件中引入样式文件，相当于全局引入，正确的做法：**
> react 会将类名做一些修改，类似vue的scoped
1. 将样式文件的名字改成 xxx.module.css/less/scss
2. tsx文件中引入xxx.module.css/less/scss文件
```tsx
import styles from './index.scss'
```
3. 将文件以模块化模式导入后，它变成一个对象
```tsx
export default function Comp1() {
  return (
    <div className={styles.box}>comp1</div>
  )
}
```
#### 路由重定向
```tsx
import { Navigate } from 'react-router-dom'

[
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/home',
        element: <Home/>
      }
    ]
  }
]
```
#### 路由loading
> 可能用了懒加载后，需要给组件添加loading，需要用React.Suspense 组件
```tsx
import React, {lazy} from 'react'
const Home = lazy(() => import('./Home'))
{
  path: '/home',
  element: <React.Suspense fallback={<div>loading...</div>}>
    <Home/>
  </React.Suspense>
},
```
