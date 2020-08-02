import login from '../pages/login'
import notFound from '../pages/login/404'
import admin from '../pages/admin'
import about from '../pages/admin/about'

const loginRoutes = [
  // name:''
  {
    path: '/404',
    component: notFound
  },
  {
    path: '/login',
    component: login
  }
]
const routes = [
  // name:''
  {
    path: '/404',
    component: notFound
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/admin/index',
    component: admin
  },
  {
    path: '/admin/about',
    component: about
  }
]
export { loginRoutes, routes }
{ /* <Route component={login} path="/logins"/> */ }
