import React from 'react'
import {Card,Table,Button,Input,Select} from 'antd'
import {Link} from 'react-router-dom'
class list extends React.Component{

state={
    lists: [//一级分类列表
        {
          key: 1,
          name: '联想ThinkPad翼48',
          describe: '性价比高',
          price: '6600',
          status:1
        },
        {
          key: 2,
          name: '华硕（ASUS）飞行堡垒',
          describe: 'cooooooooooooooooooooooooool',
          price: '8000',
          status:0
        },
      ]
}
componentWillMount(){
    this.columns =[
        {
          title: '商品名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
        title: '商品描述',
          width:500,
          dataIndex: 'describe',
        key: 'describe',
        },
        {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        render:(e)=>{
            return'￥'+e
        }
        },
        {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        },
        {
          width:100,
          title: '操作',
        render:(a,b,index)=>{
          // console.log(a,b,c)
          return (
            <div>
                <Link to='/admin/list/detail/'>详情</Link>
                <Link to='/admin/list/update'>修改</Link>
            </div>
        )
        }
        }
      ]
      this.searchList=['按商品名称搜索','按商品分类搜索','按商品描述搜索']
      this.searchTitle=(
          <div className='searchTitel'>
            <Select defaultValue="按商品名称搜索">
                {this.searchList.map((item,index)=><Select.Option key={index} value={item}>{item}</Select.Option>)}
            </Select>
            <Input placeholder="请输入分类名称" />
            <Button type='primary'>搜索</Button>
          </div>
        
      )
}
    render(){
        return(
            <div className='list'>
                <Card title={this.searchTitle} extra={
                    <Link to='/admin/list/add'><Button type='primary'>添加商品</Button></Link>
                
                } >
                  <Button onClick={()=>{this.setState({lists:[]})}}>点击</Button>
                    <Table bordered dataSource={this.state.lists} columns={this.columns} />
                </Card>
            </div>
        )
    }
    
}
export default list