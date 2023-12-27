import React, { useState } from 'react';
import { Layout } from 'antd';
import LayoutHeader from './components/Header'
import LayoutSider from './components/Sider'
import LayoutFooter from './components/Bottom'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../../redux';
const { Sider, Content } = Layout;

const AppContainer: React.FC = () => {
    const { isCollapsed } = useAppSelector(state => state.common)
    return (
        <Layout style={{ height: '100%' }}>
            <LayoutHeader></LayoutHeader>
            <Layout hasSider>
                <Sider trigger={null} collapsible collapsed={isCollapsed}>
                    <LayoutSider></LayoutSider>
                </Sider>
                <Layout>
                    <Content>
                        <Outlet></Outlet>
                    </Content>
                </Layout>
                <LayoutFooter></LayoutFooter>
            </Layout>
        </Layout>

    );
};

export default AppContainer;