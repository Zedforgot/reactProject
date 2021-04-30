import React from 'react'
import {Card,Table,Button,Input,Select} from 'antd'

class TTable extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Table bordered dataSource={this.props.lists} columns={this.props.columns} />
        )
    }
}
export default TTable