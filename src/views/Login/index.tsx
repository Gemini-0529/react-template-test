import { ChangeEvent, useEffect, useState } from 'react'
import initLoginBg from './initBg'
import './login.scss'
import { Input, Space, Button } from 'antd'
export default function Login() {

  useEffect(() => {
    initLoginBg()
    window.onresize = () => initLoginBg()
  },[])

  const [loginInfo, setLoginInfo] = useState({})
  // 表单输入框回调
  const formInputChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    setLoginInfo({
      ...loginInfo,
      [type]: e.target.value
    })
  }
  const login = () => {
    console.log('登录信息-->', loginInfo);
    
  }
  return (
    <div className='loginPage'>
      <canvas id="canvas" style={{display: 'block'}}></canvas>
      <div className='loginBox'>
        <div className='title'>
          <h1>后台管理系统</h1>
          <p className="a b">Strive EveryDay</p>
        </div>
        <div className="form">
          <Space direction="vertical" size="middle" style={{display: 'flex'}}>
            <Input
              placeholder="请输入用户名"
              onChange={(e:ChangeEvent<HTMLInputElement>) => formInputChange(e, 'username')}
            />
            <Input.Password
              placeholder="请输入密码"
              onChange={(e:ChangeEvent<HTMLInputElement>) => formInputChange(e, 'userpwd')}
            />
            <div className="captchaBox">
              <Input placeholder="请输入验证码" />
              <div className="captcha">
                <img src="x" alt="验证码" height="100%"/>
              </div>
            </div>
            <Button type="primary" block style={{marginTop: '20px'}} onClick={login}>
              Login
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
