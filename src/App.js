import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom'
import {mainRoutes} from './router'
import {Layout} from 'antd'
import Navigation from './App/navigation'
import Header from './App/header'
import Content from './App/content'
import Footer from './App/footer'
import  './index.less'
import {getItem} from './utils/sessionUtils'

function App(){
  
    return (
    <Layout className='App' >
      <Navigation />
      <Layout>
        <Header/>
        <Content>
          <Switch>
        {/* 进入APP后，检查登陆状态，未登陆状态下默认跳到login页面 */}
        {!getItem('isLogin')&&<Redirect  from='/admin'  to='/login'/>}
          {/* 进入APP后，登陆状态下默认加载home主页面 */}
          <Redirect  from='/admin' exact to='/admin/home'/>
          {mainRoutes.map((item,index)=>{//定义各页面路由
          return <Route path={item.path} key={index} component={item.component}/>
          })}
          {/* 各定义路由外进入404页面 */}
          <Redirect  from='/'  to='/404'/>
          </Switch>
        </Content>
        <Footer/>
      </Layout>
    </Layout>
      );
}

export default App;
