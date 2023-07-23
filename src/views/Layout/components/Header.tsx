import { Layout } from 'antd'

const { Header } = Layout
export default function HeaderContainer() {
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="header-logo">Logo</div>
      <div>123</div>
    </Header>
  )
}
