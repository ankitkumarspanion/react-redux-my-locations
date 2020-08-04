import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import AddCategory from './Category/AddCategory';
import CategoryView from './Category/CategoryView';
import EditCategory from './Category/EditCategory';
import DeleteCategory from './Category/DeleteCategory';
import LocationView from './Location/LocationView';
import AddLocation from './Location/AddLocation';
import EditLocation from './Location/EditLocation';
import DeleteLocation from './Location/DeleteLocation';

import Header from './Header';
import Home from './Home';
import './style.css';

import history from '../history';
import ViewLocation from './Location/ViewLocation';
import GoogleMapView from './Map/GoogleMapView';
import ViewCategory from './Category/ViewCategory';

class App extends Component {
    render() {
        return (
            <div className='app'>
            <Router history={history} basename="/react-redux-my-locations">
                <Header/>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/categories' exact component={CategoryView} />
                    <Route path='/categories/add' exact component={AddCategory} />
                    <Route path='/categories/view/:id' exact component={ViewCategory} />
                    <Route path='/categories/edit/:id' exact component={EditCategory} />
                    <Route path='/categories/delete/:id' exact component={DeleteCategory} />
                    <Route path='/locations/' exact component={LocationView} />
                    <Route path='/locations/add/' exact component={AddLocation} />
                    <Route path='/locations/view/:id' exact component={ViewLocation} />
                    <Route path='/locations/edit/:id' exact component={EditLocation} />
                    <Route path='/locations/delete/:id' exact component={DeleteLocation} />
                    <Route path='/map/:lat/:lng' exact component={GoogleMapView} />
                </Switch>
            </Router>
            </div>
        );
    }
}

export default App;
