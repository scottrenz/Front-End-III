import React, {  useState } from "react"
import Begin from './Begin'
import { Route } from 'react-router-dom';

function AppRoute(props) {

    return (

    <div className="App">
            <Route
  path='/form'
  render={(props) => <Begin {...props} />}
//   render={(props) => <Begin kind={kind} setKind={setKind} zip={zip} setZip={setZip} fresh={fresh} setFresh={setFresh} vData={vData} volData={volData} isAuthed={true} />}
/>

    </div>

);
}

export default AppRoute;