import React from 'react'
import { Modal } from 'antd';
import formValidate from '../utils/formValidate'
class ModalForm extends React.Component{
constructor(props){
    super(props)
    this.state={

    }
    
}
async handleOk(){
    //获取表单值
    // console.log(this.props.parent.refs[this.props.formName+'Form'].getFieldsValue())
    formValidate(this.props.parent.refs[this.props.formName+'Form'])
    .then(()=>{
        this.modalClose()
    }
    )
}
modalClose(){//控制弹框关闭
    this.props.parent.setState({
        modal:false
    })
}
render(){
    return(
        <Modal
        title="Basic Modal"
        visible
        onOk={this.handleOk.bind(this)}
        onCancel={this.modalClose.bind(this)}
      >
          {this.props.children}
      </Modal>
    )
}
}
export default ModalForm