import {useState, createElement, useCallback} from 'react'
import { Layout, theme, Menu } from 'antd'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom'
const { Sider } = Layout
const menus: MenuProps['items'] = [
  {
    key: '/home',
    icon: '',
    label: '首页'
  },
  {
    key: '/my',
    icon: '',
    label: '我的',
    children: [
      {
        key: '/userinfo',
        icon: '',
        label: '个人资料'
      }
    ]
  }
]
export default function SideBar() {
  const { token: { colorBgContainer } } = theme.useToken()
  const [collapsed, setCollapsed] = useState(false)
  const router = useNavigate()
  const handleClickMenu = useCallback(
    (menu) => {
      console.log(menu);
      router(menu.key)
    },
    [],
  )
  return (
    <Sider
      width={200}
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
      style={{
        background: colorBgContainer
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['/home']}
        defaultOpenKeys={['/home']}
        style={{ height: '100%', borderRight: 0 }}
        items={menus}
        onClick={handleClickMenu}
      />
    </Sider>
  )
}