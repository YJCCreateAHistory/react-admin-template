import React from 'react'
import { Card, Table } from 'antd'
interface IProps {
  bordered?: boolean;
  tabNav?: React.ReactNode;
}
const CommonTable = (props: IProps) => {
  const { bordered, tabNav } = props
  return (
    <Card>
      <Table
        bordered={bordered}
      />
    </Card>
  )
}

export default CommonTable