import React from 'react'
import LinkBtn from '../../../components/linkBtn'
import ModalForm from '../../../components/modalForm'
import {Card,Table,Button,Form,Input,Select} from 'antd'
class type extends React.Component{
    constructor(props){
        super(props)
        this.state={
          modalType:'add',
          modal:'',
              lists: [//一级分类列表
                {
                  id:1,
                  key: '1',
                  name: '胡彦斌',
                },
                {
                  id:2,
                  key: '2',
                  name: '吴彦祖',
                },
              ],
              //胡彦斌
              ybList:[],
              //吴彦祖
              yzList:[],
              title:'一级分类列表'
        }
    }
    //一级列表展示
    firstList(){
this.setState({
  title:'一级分类列表'
})
    }
    //二级列表展示
    secondList(e){
      // ajax请求传ID获取对应二级列表
     
      this.setState({
        title:(
          <span>
          <LinkBtn onClick={this.firstList.bind(this)}>{this.state.title}</LinkBtn>
          /{e.name}
          </span>
        )
      })
    }
    componentWillMount(){
      this.columns =[
        {
          title: '分类名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '操作',
          width:300,
        render:(e)=>(
            <div>
                <LinkBtn onClick={()=>{
                  console.log(e);
                  this.setState({
                  modal:'change',
                  typeInput:e.name
                  })}}>修改分类名称</LinkBtn>
                {this.state.title==='一级分类列表'?
                <LinkBtn onClick={this.secondList.bind(this,e)}>查看子分类</LinkBtn>:''
              }
            </div>
        )
        }
      ]
    }
    componentDidMount(){
    }
    render(){
        return(
          <div className='type'>
            {/* 内容区 */}
            <Card title={this.state.title} extra={
            <Button type='primary' onClick={()=>{this.setState({modal:'add'})}}>添加</Button>
            } >
                <Table bordered dataSource={this.state.lists} columns={this.columns} />
            </Card>
            {/* 弹框 */}
            {this.state.modal==='add'?//添加分类
              <ModalForm parent={this} formName='add' title='添加分类'>
                <Form
                hideRequiredMark
                ref='addForm'
                >
                  <Form.Item label="所属分类" name='typeSelect' rules={[{required:true,message:'请选择所属分类'}]}>
                  <Select
                    showSearch
                    placeholder="请选择所属分类"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {this.state.lists.map(item=><Select.Option key={item.key} value={item.name}>{item.name}</Select.Option>)}
                  </Select>

                  </Form.Item>
                  <Form.Item label="分类名称" name='typeInput' rules={[{required:true,message:'请输入分类名称'}]}>
                    <Input placeholder="请输入分类名称" />
                  </Form.Item>
                </Form>
              </ModalForm>
              :
              this.state.modal==='change'?//修改分类
              <ModalForm parent={this} formName='change' title='修改分类'>
                <Form
                hideRequiredMark
                ref='changeForm'
                initialValues={{typeInput:this.state.typeInput}}
                >
                  <Form.Item label="分类名称" name='typeInput' rules={[{required:true,message:'请输入分类名称'}]}>
                    <Input placeholder="请输入分类名称" />
                  </Form.Item>
                </Form>
              </ModalForm>
              :null
            }
          </div>
            
        )
    }
    
}
export default type