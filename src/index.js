import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/reset.css'
import 'antd/dist/antd.css'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import {loginRoutes} from './router'
ReactDOM.render(
      <BrowserRouter>
        <Switch>
        {/* 定义APP和login,404页面路由配置 */}
          <Route path='/admin'  key='/admin' component={App}/>
          {loginRoutes.map((item,index)=>{
            return <Route path={item.path} key={index} component={item.component} />
          })}
          {/* / 默认跳到主页面 */}
          <Redirect  from='/' exact to='/admin'/>
          {/* 匹配所有以上正常路由以外/  默认跳到404 */}
          <Redirect  from='/'  to='/404'/>
        </Switch>
      </BrowserRouter>
    ,
  document.getElementById('root')
);
