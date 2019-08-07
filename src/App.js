import React, {  useState } from "react"
import Form from './Form'
// import usePost from './usePost'
// import { Switch } from 'react-router-dom'
// import { BrowserRouter as Router } from "react-router-dom";
// import { Route } from 'react-router-dom';
import './App.css';

function App() {

  const [volData, setData] = useState('')
  const [kind, setKind] = useState('')
  const [zip, setZip] = useState('')
  const [fresh, setFresh] = useState(false)

  //  usePost (setData,volData)
  if (volData)
  {
let data = volData
let dataU = []
let fail = false
  data.forEach(function(item, index,arr){
    if(index===0)
    {dataU.push(item)}
    else
    {
      fail = false;
      data.forEach(function(itemx, indexx,arrx){
        if( index > indexx && arrx[indexx]['name'] === arr[index]['name'] && arrx[indexx]['description'] === arr[index]['description'])
        {fail=true}
      })
      if (!fail)
      {dataU.push(item)}
    }
    })
setData(dataU)
  }
let vData = [{name: '', description: '', website: '', address: '', city: '', zip: ''}]
vData[0]=              {
                "name": "Feed the Children, Inc.",
                "description": "One of America's most effective charities providing food, clothing, medical care, education, and emergency relief to children in the United States and overseas since 1979.",
                "website": "http://www.feedthechildren.org",
                "address": "333 N. Meridian Ave",
                "city": "Oklahoma City",
                "zip code": "21202"
              }
              vData[1]={
                "name": "Rude Ranch Animal Rescue",
                "description": "A no-kill organization dedicated to providing refuge to abandoned, abused and homeless dogs and cats until they are placed in permanent homes.",
                "website": "http://www.ruderanch.org",
                "address": "3200 Ivy Way",
                "city": "Harwood",
                "zip code": "21202"
              }
              vData[2]=          {
                "name": "Maryland Zoo in Baltimore (The)",
                "description": "Educational programs and naturalistic exhibits provide visitors with educational recreation activities and further understanding of the urgent need to conserve and protect wildlife and wetlands.",
                "website": "http://www.marylandzoo.org",
                "address": "1876 Mansion House Drive, Druid Hill Park",
                "city": "Baltimore",
                "zip code": "21202"
              }
              vData[3]=  {
                "name": "Christopher Reeve Foundation",
                "description": "The Reeve Foundation is dedicated to curing spinal cord injury by funding innovative research and improving the quality of life for people living with paralysis.",
                "website": "http://www.christopherreeve.org",
                "address": "636 Morris Turnpike, Suite 3A",
                "city": "Short Hills",
                "zip code": "21202"
              }
              vData[4]=  {
                "name": "Institute of Notre Dame",
                "description": "A college-preparatory school for young women, rooted in the values of the Catholic faith and the educational vision of the School Sisters.",
                "website": "http://www.indofind.org",
                "address": "901 Aisquith Street",
                "city": "Baltimore",
                "zip code": "21202"
              }

              // let vData2 = {
              //   "1": {
              //     "name": "Feed the Children, Inc.",
              //     "description": "One of America's most effective charities providing food, clothing, medical care, education, and emergency relief to children in the United States and overseas since 1979.",
              //     "website": "http://www.feedthechildren.org",
              //     "address": "333 N. Meridian Ave",
              //     "city": "Oklahoma City",
              //     "zip code": 73107
              //   },
              //   "2": {
              //     "name": "Rude Ranch Animal Rescue",
              //     "description": "A no-kill organization dedicated to providing refuge to abandoned, abused and homeless dogs and cats until they are placed in permanent homes.",
              //     "website": "http://www.ruderanch.org",
              //     "address": "3200 Ivy Way",
              //     "city": "Harwood",
              //     "zip code": 20776
              //   },
              //   "3": {
              //     "name": "Maryland Zoo in Baltimore (The)",
              //     "description": "Educational programs and naturalistic exhibits provide visitors with educational recreation activities and further understanding of the urgent need to conserve and protect wildlife and wetlands.",
              //     "website": "http://www.marylandzoo.org",
              //     "address": "1876 Mansion House Drive, Druid Hill Park",
              //     "city": "Baltimore",
              //     "zip code": 21217
              //   },
              //   "4": {
              //     "name": "Christopher Reeve Foundation",
              //     "description": "The Reeve Foundation is dedicated to curing spinal cord injury by funding innovative research and improving the quality of life for people living with paralysis.",
              //     "website": "http://www.christopherreeve.org",
              //     "address": "636 Morris Turnpike, Suite 3A",
              //     "city": "Short Hills",
              //     "zip code": 7078
              //   },
              //   "5": {
              //     "name": "Institute of Notre Dame",
              //     "description": "A college-preparatory school for young women, rooted in the values of the Catholic faith and the educational vision of the School Sisters.",
              //     "website": "http://www.indofind.org",
              //     "address": "901 Aisquith Street",
              //     "city": "Baltimore",
              //     "zip code": 21202
              //   }
              // }
    return (

    <div className="App">
      <div >
    <Form kind={kind} setKind={setKind} zip={zip} setZip={setZip} fresh={fresh} setFresh={setFresh} vData={vData} volData={volData} />
  </div>
    </div>

);
}

export default App;
