import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import Add from './Add';
import Edit from './Edit';
import NoMatch from './NoMatch';

export default () => (
    <BrowserRouter>
        <div>
            <ul>
                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/add'>Create Expense</NavLink>
            </ul>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/add' component={Add} />
                <Route path='/:id' component={Edit} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </BrowserRouter>
);

