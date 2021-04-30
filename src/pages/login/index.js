import React from 'react'
import'./login.less'
import logo from '../../assets/images/logo.jpg'
import {Form,Button,Input} from 'antd'
import {setItem,getItem} from '../../utils/sessionUtils'
// import ajax from '../../api/ajax'
class Login extends React.Component{
    constructor(props){
        super(props)
        
        this.state={

        }
        this.onFinish = values => {
            !getItem('isLogin')&&setItem('isLogin',true)
      this.props.history.replace('/admin')
          };
          this.onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
          };
    }
    componentDidMount(){
      // removeItem('isLogin')
console.log(this.props)
    }
    render(){
        return(
    // <BrowserRouter>
    <div className='login'>
                <header className='login_header'>
                    <img src={logo} alt='logo'/>
                    <h1>react项目</h1>
                </header>
                <section className='login_content'>
                    <h2>用户登录</h2>
                    <Form hideRequiredMark
                    labelCol={{span:6}}
                    wrapperCol={{ span: 18 }}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish.bind(this)}
                    onFinishFailed={this.onFinishFailed.bind(this)}
                    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{span: 24}}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form> 
                </section>   
            </div>
        // </BrowserRouter>
        )
    }
    
}
export default Login