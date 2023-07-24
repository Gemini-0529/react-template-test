import {useState, useCallback} from 'react'
import { Layout, theme, Menu } from 'antd'
import type { MenuProps } from 'antd';
import { useNavigate, useLocation, /*useMatch*/ } from 'react-router-dom'
const { Sider } = Layout
const menus: MenuProps['items'] = [
  {
    key: '/home',
    icon: '',
    label: '首页'
  },
  {
    key: 'my',
    icon: '',
    label: '我的',
    children: [
      {
        key: '/my',
        icon: '',
        label: '个人资料'
      }
    ]
  },
  {
    key: 'system',
    icon: '',
    label: '系统',
    children: [
      {
        key: 'systemInfo',
        icon: '',
        label: '系统信息',
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
      router(menu.key)
    },
    [],
  )

  const [openKeys, setOpenKeys] = useState([])
  const handleOnOpenChange: MenuProps['onOpenChange'] = (keys:string[]) => {
    // 标记：如果有3级路由，此写法有bug
    setOpenKeys([keys.at(-1)])
  }

  const currentRoute = useLocation()
  console.log('当前路由--->',currentRoute);
  // 刷新页面，展开对应路由的父级菜单
  const macheRoute = useCallback(() => {
    let key = ''
    const childrensRoute = menus.filter(item => item.children)
    childrensRoute.forEach(item => {
      item.children.forEach(child => {
        if(child.key === currentRoute.pathname) {
          key = item.key
          return
        }
      })
    })
    return key
  },[currentRoute.pathname])
  console.log('----->',macheRoute())
  
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
        defaultSelectedKeys={[currentRoute.pathname]}
        style={{ height: '100%', borderRight: 0 }}
        items={menus}
        onClick={handleClickMenu}
        openKeys={openKeys}
        onOpenChange={handleOnOpenChange}
      />
    </Sider>
  )
}