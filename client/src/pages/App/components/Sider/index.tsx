import React, { useState } from 'react'
import {
  BankOutlined,
  BuildOutlined,
  DatabaseOutlined,
  DropboxOutlined,
  FolderOutlined,
  FundProjectionScreenOutlined,
  MacCommandOutlined,
  PartitionOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import './index.less'
import { Link } from 'react-router-dom'
type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    key: '1',
    icon: <BankOutlined />,
    label: <Link to={'/home'}>首页</Link>
  },
  {
    key: '2',
    icon: <FolderOutlined />,
    label: '资源列表',
    children:[
      {
        key: '2-1',
        icon: <FundProjectionScreenOutlined />,
        label: <Link to={'/resource/list'}>数据资源</Link>
      },
      {
        key: '2-2',
        icon: <DropboxOutlined />,
        label: <Link to={'/resource/personal'}>人力资源</Link>
      }
    ]
  },
  {
    key: '3',
    icon: <MacCommandOutlined />,
    label: '功能页面',
    children: [
      {
        key: '3-1',
        icon: <PartitionOutlined />,
        label: '资源管理'
      },
      {
        key: '3-2',
        icon: <UserAddOutlined />,
        label: '员工管理'
      }
    ]
  },
  {
    key: '4',
    icon: <DatabaseOutlined />,
    label: '常用组件'
  },
  {
    key: '5',
    icon: <BuildOutlined />,
    label: '自定义hook'
  }
]

const LayoutSider: React.FC = () => {
  return (
    <div className='layout-sider-container'>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme='dark'
        items={items}
      />
    </div>
  );
}

export default LayoutSider