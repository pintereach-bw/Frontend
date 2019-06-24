import React from 'react';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom'

import Register from './components/Register';
import Login from './components/Login'
import PrivateRouter from './components/PrivateRouter'


function App() {
  return (
    <div style={ mainDiv }>
       <Route exact path='/register' component={Register} />
       <Route exact path='/login' component={Login} />
    </div>
  );
}

export default withRouter(App);


const mainDiv = {
  display: 'flex',
}