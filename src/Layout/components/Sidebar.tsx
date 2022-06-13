import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React, {  useState } from 'react';
import Sidebar from './Sidebar.module.scss';
import { Items } from '../index'



type SidebarProps = {
  MenuItems: Items[],
  changeItem: (e:string) => void
}

const App = ({ MenuItems, changeItem } :SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }} className={collapsed? Sidebar.small_bar : Sidebar.sidebar}>
      <Button type="primary" onClick={toggleCollapsed} className={collapsed? Sidebar.smallHamburger : Sidebar.hamburger}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['2']}
        defaultOpenKeys={['1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={MenuItems}
        onClick={({key}) => {
          changeItem(key)
        }}
      />
    </div>
  );
};

export default App;