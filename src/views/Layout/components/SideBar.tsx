import {useState, useCallback} from 'react'
import { Layout, theme, Menu } from 'antd'
import { useNavigate, useLocation, /*useMatch*/ } from 'react-router-dom'
const { Sider } = Layout
const menus = [
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
  const currentRoute = useLocation()
  // 刷新路由，展开对应的菜单
  let defaultOpenKey = ''
  const findKey = (obj:object) => {
    return obj.key === currentRoute.pathname
  }
  const macheRoute = useCallback(() => {
    for(let i=0;i<menus.length;i++) {
      if(menus[i].children && menus[i].children?.find(findKey)) {
        defaultOpenKey= menus[i].key
        break;
      }
    }
  },[currentRoute.pathname])
  macheRoute()

  const [openKeys, setOpenKeys] = useState([defaultOpenKey])
  const handleOnOpenChange = (keys:string[]) => {
    // 标记：如果有3级路由，此写法有bug
    setOpenKeys([keys.at(-1) as string])
  }

  
  // 刷新页面，展开对应路由的父级菜单
  
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