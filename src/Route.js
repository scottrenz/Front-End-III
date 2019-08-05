import React from "react"
import { Route } from 'react-router-dom';

function App() {

    return (

    <div className="App">
            <Route path='/form' component={Refresh} />
    </div>

);
}

export default Route;

function Refresh () {
alert("hi scott")
  window.location.reload(true);
}