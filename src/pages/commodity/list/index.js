import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import ProductHome from './home'
import ProductChange from './change'
import './index.less'
function list(){
    return(
        <Switch>
            <Route path='/admin/list/detail/:id' component={ProductChange}/>
            <Route path='/admin/list/add' component={ProductChange}/>
            <Route path='/admin/list/update' component={ProductChange}/>
            <Route path='/admin/list/home' component={ProductHome}/>
        {/* 手动Url输入/admin/list/detail跳详情页，默认跳到详情页第0页 */}
            <Redirect from='/admin/list/detail' to='/admin/list/detail/0'/>
            <Redirect from='/admin/list' to='/admin/list/home'/>
        </Switch>
    )
    
}
export default list