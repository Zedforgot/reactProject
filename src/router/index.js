import pageNotFound from  '../pages/login/404'
import login from  '../pages/login'
import home from  '../pages/home'
import type from  '../pages/commodity/type'
import list from  '../pages/commodity/list'
import User from  '../pages/user'
import Role from  '../pages/role'
import Bar from  '../pages/charts/bar'
import Line from  '../pages/charts/line'
export const loginRoutes=[
    {
        path:'/login',
        component:login
    },
    {
        path:'/404',
        component:pageNotFound

    }
]
export const mainRoutes=[
    {
        path:'/admin/home',
        component:home
    },
    {
        path:'/admin/list',
        component:list
    },
    {
        path:'/admin/type',
        component:type
    },
    {
        path:'/admin/user',
        component:User
    },
    {
        path:'/admin/role',
        component:Role
    },
    {
        path:'/admin/bar',
        component:Bar
    },
    {
        path:'/admin/line',
        component:Line
    }
]
