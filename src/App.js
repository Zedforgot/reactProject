import React from 'react';
import {Button} from 'antd'
import  {routes} from './router'
import admin from './pages/admin'
import login from './pages/login'
import notFound from './pages/login/404'
import {Route,Switch,BrowserRouter,Redirect} from 'react-router-dom'

function App(props){
        return (
            <>
            {/* <Route path/> */}
            <BrowserRouter>
            <Switch>
                
    {routes.map(item => <Route path={item.path} component={item.component} key={item.path}></Route>)}
             {sessionStorage.getItem('tok')?
             (
                 <Switch>
    <Redirect from='/admin' to='/admin/index'/>
    <Redirect from='/' exact to='/admin/index'/>
    <Redirect to='/404'/>
    </Switch>
             )
             :
             <Switch>
             <Redirect from='/admin' to='/login'/>
    <Redirect from='/' exact to='/login'/>
    <Redirect to='/404'/>
    </Switch>
            }
            
            
            

            </Switch>
            </BrowserRouter>
</>
    )
    

}
export default App;