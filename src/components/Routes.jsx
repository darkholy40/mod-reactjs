import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Form from '../pages/Form'
import User from '../pages/User'
import UserProfile from '../pages/UserProfile'
import Number from '../pages/Number'

export default function Routes() {
    return <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/form" component={Form} />
            <Route exact path="/user" component={User} />
            <Route path="/user/:id" component={UserProfile} />
            <Route path="/number" component={Number} />
        </Switch>
    </div>
}