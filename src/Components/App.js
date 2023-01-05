import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Countries from "../pages/Countries";
import Places from "../pages/Places";
import CountryDetail from "../pages/CountryDetail";
import PlacesDetail from "../pages/PlacesDetail";
import Future from "../pages/Future";
import AboutMe from "../pages/AboutMe";

const App = () => {

    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Redirect to='/countries' />
                </Route>
                <Route exact path='/countries' component={Countries}></Route>
                <Route path='/countries/:name' component={CountryDetail}></Route>
                <Route exact path='/places/:page?' component={Places}></Route>
                <Route path='/places/:name?/town' component={PlacesDetail}></Route>
                <Route path='/future' component={Future}></Route>
                <Route path='/aboutMe' component={AboutMe}></Route>
            </Switch>
        </>
    )
}

export default App;