import { useEffect } from 'react'
import initLoginBg from './initBg'
import styles from './login.module.scss'
import { Input, Space, Button } from 'antd'
export default function Login() {

  useEffect(() => {
    initLoginBg()
    window.onresize = () => initLoginBg()
  },[])
  return (
    <div className={styles.loginPage}>
      <canvas id="canvas" style={{display: 'block'}}></canvas>
      <div className={styles.loginBox + ' test'}>
        <div className={styles.title}>
          <h1>后台管理系统</h1>
          <p className="a b">Strive EveryDay</p>
        </div>
        <div className="form">
          <Space direction="vertical" size="middle" style={{display: 'flex'}}>
            <Input placeholder="请输入用户名" />
            <Input placeholder="请输入密码" type="password"/>
            <Button type="primary" block>
              Login
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
