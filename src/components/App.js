import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; //import the package
import Login from "../pages/Login/Login";
import Marketing from "../pages/Marketing Collaterals/Marketing";

function App(){
    return(
        <BrowserRouter>

                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/marketing" component={Marketing} />

                </Switch>

       </BrowserRouter>

    )
}
export default App