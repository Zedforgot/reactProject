import React from 'react'
class child extends React.Component{
    constructor(props){
        super(props)
        
        this.state={

        }
    }
    componentDidMount(){
        console.log(this.props.data)
    }
    render(){
        return(
            <div>child

                <span>{this.props.data}</span>
                <button onClick={()=>this.props.fun('child')}>click</button>
            </div>
        )
    }
}
export default child