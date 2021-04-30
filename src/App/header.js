import React from 'react'
// import { Layout } from 'antd';
import { withRouter} from 'react-router-dom'
import './index.less'
import { menuList } from '../config/menuList'
import {formdate} from '../utils/formdate'
import {Modal} from 'antd'
import {removeItem} from '../utils/sessionUtils'
import LinkBtn from '../components/linkBtn'
// const {  Header } = Layout;
class TopContent extends React.Component{
constructor(props){
    super(props)
    this.state={
      time:formdate(new Date())

    }

}
componentDidMount(){
  this.timer=setInterval(()=>{
    this.setState({
      time:formdate(new Date())
    })
  },1000)
}
componentWillUnmount(){
  clearInterval(this.timer)
}
loginQuit=()=>{
Modal.confirm({
    title: '提示',
    content: '确定想退出吗？',
    okText: '确定',
    cancelText: '取消',
    onOk:()=>{
  removeItem('isLogin')
this.props.history.replace('/')
    }
  });
}
render(){
  menuList.forEach(item=>{
    if(item.children){
      item.children.forEach(el=>{
        if(el.key===this.props.location.pathname){
          this.pathname=el.title
        }
      })
    }else{
      if(item.key===this.props.location.pathname){
        this.pathname=item.title
      }
    }
  })
    return(
      <header className='Header'>
        <section className='header_top'>
          <span>欢迎，admin</span>
          <LinkBtn onClick={this.loginQuit}>退出</LinkBtn>
        </section>
        <section className='header_bottom'>
          <span>{this.pathname}</span>
          <span>{this.state.time}</span>
        </section>
      </header>
    )
}
}
// export default TopContent
export default withRouter(TopContent)