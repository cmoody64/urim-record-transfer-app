import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
//import { AdminLayout } from './layouts/AdminLayout'
//import { UserLayout } from './layouts/UserLayout'
//import { App } from './layouts/App.js'

const app = document.getElementById('app')
ReactDOM.render(
   <Router history={hashHistory}>
       <Route path='/' component={App}>
           <IndexRoute component={UserLayout} />
           <Route path='admin' component={AdminLayout} />
       </Route>
   </Router>,
app)
