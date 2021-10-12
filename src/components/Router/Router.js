import React from 'react'
import Landing from "../Landing/Landing";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from "../NotFound/NotFound"
import carsBrands from "../../data/car-brands";
import App from "../App";

function Router () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={(props) => <Landing carsBrands={carsBrands} {...props} />}/>
                <Route exact path='/cars/:brandId' component={App}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
