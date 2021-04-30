import React, { Component } from 'react'
import Style from './style.css'


class P1 extends Component {
    fun(){
        console.log(this.props.p2)
        this.props.p2.forceUpdate()
    }
    render() {
        
        return (
            <div className={Style.container}>
                p1
                <button onClick={()=>this.fun()}>p1Btn</button>
            </div>
        )
    }
}
export default P1