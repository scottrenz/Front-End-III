import React, { useState } from "react"
import Form from './Form'

function App() {
  // const [member, setMember] = useState(props.memberToEdit || {name: '', email: '', role: ''})
  // const [member, setMember] = useState({name: [], email: [], role: []})
  const [kind, setKind] = useState([])
  // const [member, setMember] = useState({name: '', email: '', role: ''})
  // const [member, setMember] = useState('why')

/* li {display: inline;}  */

const ul = {
  float: 'left', 
}
const li = {
  display: 'inline',
  width: '400px'
}

  return (
    <div className="App-header">
      <Form kind={kind} setKind={setKind} />

    </div>
  )
}
export default App
