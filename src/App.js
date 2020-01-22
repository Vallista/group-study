import React from 'react'
import { Switch, HashRouter as Router, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import City from './pages/City'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cities/:name' component={City} />
      </Switch>
    </Router>
  )
}

export default App
