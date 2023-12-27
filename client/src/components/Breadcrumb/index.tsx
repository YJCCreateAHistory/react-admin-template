import React from 'react';
import { Breadcrumb } from 'antd';
interface IProps {
  
}
const BreadcrumbNav = (props: IProps) => (
  <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]}
  />
);

export default BreadcrumbNav;