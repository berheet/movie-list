import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Series from './components/Series/Series';
import SingleSeries from './components/SingleSeries/SingleSeries'

const Routes = props => (
    <Switch>
        <Route exact path ='/' component={Series} />
        <Route path='/series/:id' component={SingleSeries} />
    </Switch>
)

export default Routes