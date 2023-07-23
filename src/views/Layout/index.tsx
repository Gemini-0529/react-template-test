import * as React from 'react';
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import BreadCrumb from './components/BreadCrumb'

import { Layout, theme } from 'antd';
import styles from './layout.module.scss'

const { Content } = Layout;

export default function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header />
      <Layout className={styles['body-container']}>
        <SideBar/>
        <Layout style={{ padding: '0 24px 24px' }}>
          <BreadCrumb/>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

