import React from 'react'
import {Card,List,Button,Form,Input,Select} from 'antd'
import LinkBtn from '../../../components/linkBtn'
import './index.less'
class Update extends React.Component{
constructor(props){
    super(props)
    this.state={
        detail:{
            name:'Racing car sprays burning fuel into crowd.',
            describe:'Australian walks 100km after outback crash.',
            price:'6000',
            type:'电脑',
            images:[
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg',
                'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2989832003,2963819663&fm=26&gp=0.jpg'
            ]
        }
}
}
componentWillMount(){
    this.title=(
        <div>
        <LinkBtn onClick={()=>{window.history.back()}}>&lt;</LinkBtn>
        <span>商品详情</span>
        </div>
    )
    // this.listNav=[
    //     '商品名称：',
    //     '商品描述：',
    //     '商品价格：',
    //     '所属分类：',
    //     '商品图片：',
    // ]
}
componentDidMount(){
    // 进入页面获取对应详情页码，发送请求拿对应详情页数据
    console.log(this.props.match.params.id)

}
    render(){
        const {detail}=this.state
        return(
                <Card title={this.title} className='update'>
                <List>
                    <List.Item><font>商品名称：</font>{detail.name}</List.Item>
                    <List.Item><font>商品描述：</font>{detail.describe}</List.Item>
                    <List.Item><font>商品价格：</font>{detail.price}</List.Item>
                    <List.Item><font>所属分类：</font>{detail.type}</List.Item>
                    <List.Item>
                        <span>商品图片：</span>
        {detail.images.map(item=><img src={item}></img>)}
                        </List.Item>
                </List>
                </Card>
        )
    }
    
}
export default Update