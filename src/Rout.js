import React from "react"
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

function Rout() {

    return (

    <div className="App">
<Router>
            <Route path='/rout' component={Refresh} />
            </Router>
    </div>

);
}

export default Rout;

function Refresh () {
alert("hi scott")
  window.location.reload(true);
}