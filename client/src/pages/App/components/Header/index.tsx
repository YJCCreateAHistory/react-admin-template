import React from 'react'
import { Avatar } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons'
import { useAppDispatch, commonActions, useAppSelector } from '@/redux'
import './index.less'
import Svg from '@/components/Svg'
import SetSvg from '@/assets/svgs/manager.svg'

const LayoutHeader = () => {
  const dispatch = useAppDispatch()
  const { isCollapsed } = useAppSelector(state => state.common)
  const handleMenuIsCollapsed = () => {
    dispatch(commonActions.setMenuExpand({ isCollapsed: !isCollapsed }))
  }
  return (
    <Header style={{ paddingLeft: '0' }}>
      <div className="layout-header-container">
        <div className="logo" style={{ marginLeft: isCollapsed ? '16px' : '70px'}}>
          <Svg svg={SetSvg} width={'50px'} height={'50px'}></Svg>
          <div className="expand" onClick={handleMenuIsCollapsed} style={{ marginLeft: isCollapsed ? '0' : '70px'}}>
            {
              isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
            }
          </div>
        </div>
        <div className="layout-header-site-bar">
          <div className="layout-header-avatar">
            <Avatar style={{ backgroundColor: '#87d068' }} size={'small'} icon={<UserOutlined />} />
          </div>
        </div>
      </div>
    </Header>
  )
}

export default LayoutHeader