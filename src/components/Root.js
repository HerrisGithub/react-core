import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom'

// pages
import Home from '.././Home/Home'
import About from '../About/About'
// end pages

// components
import NotFound from './404'
import Footer from './Footer'
// end components
 

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/about' component={About} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
  </Provider>
)
 
Root.propTypes = {
  store: PropTypes.object.isRequired
}
 
export default Root