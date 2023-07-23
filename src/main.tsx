import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
// 样式初始化插件
import 'reset-css'



import "@/assets/styles/global.scss"
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
