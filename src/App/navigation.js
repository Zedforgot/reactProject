import React from 'react'
import { Layout ,Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import {Link,withRouter}from 'react-router-dom'
import './index.less'
import logo from '../assets/images/logo.jpg'
import {menuList} from '../config/menuList'
const {  Sider } = Layout;
const { SubMenu } = Menu;
class Navigation extends React.Component{
constructor(props){
    super(props)
    this.state={
      openKey:menuList.filter(item=>item.children).filter(item=>item.children.filter(el=>el.key===this.props.location.pathname).length>0)
    }
}
menuClick(e){
this.props.history.push(e.key)
}
componentDidMount(){
  // console.log(this.state.openKey)
  
}
render(){
    return(
      <Sider className='navigation'>
        <div className='nav_header'>
          <Link to='/'>
          <img src={logo}/>
          <h1>硅谷后台</h1>
          </Link>
        </div>
        <div>
        <Menu
          selectedKeys={[this.props.location.pathname]}
          defaultOpenKeys={[this.state.openKey.length>0?this.state.openKey[0].key:'']}//当前地址匹配menuList里children的key，找到其一级菜单key
          mode="inline"
          theme="dark"
          onClick={(e)=>this.menuClick(e)}
        >
{menuList.map(item=>item.children?
  <SubMenu key={item.key} title={item.title}>
            {item.children.map(el=><Menu.Item key={el.key} icon={<PieChartOutlined />}>{el.title}</Menu.Item>)}
          </SubMenu>:
          <Menu.Item key={item.key} icon={<PieChartOutlined />}>
          {item.title}
         </Menu.Item>
)}
        </Menu>
      </div>
        </Sider>
    )
}
}
export default withRouter(Navigation)