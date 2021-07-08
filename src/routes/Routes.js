import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Search from '../pages/Search'
import Headlines from '../pages/Headlines'
import Advices from '../pages/Advices'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/search' component={Search}/>
                <Route path='/headlines' component={Headlines}/>
                <Route path='/advices' component={Advices}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes