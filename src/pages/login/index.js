 import React from 'react'
class Login extends React.Component{

    submit=()=>{
        console.log(this.user)
        if(this.user.value=='hxc'&&this.pass.value=='123')
        sessionStorage.setItem('tok',true)
    }
    render(){
        return(
            <div>
                <input type='text' ref={e=>this.user=e}/><br/>
                <input type='password' ref={e=>this.pass=e}/><br/>
                <input type='submit' onClick={this.submit}/>
            </div>
        )
    }
   
}
export default Login