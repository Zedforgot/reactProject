import React from 'react'
import { Layout } from 'antd';
const {  Content } = Layout;
class centerContent extends React.Component{
constructor(props){
    super(props)
    this.state={

    }
}
render(){
    return(
    <Content className='Content'>{this.props.children}</Content>
      )
}
}
export default centerContent