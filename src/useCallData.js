import React, { useEffect, useState } from "react"
import axios from 'axios'

function useCallData(setData,volData) {
  // const [volData1, setData1] = useState('')
  // const [volData2, setData2] = useState('')
  // const [volData3, setData3] = useState('')
  // const [volData4, setData4] = useState('')
  // const [volData5, setData5] = useState('')
  // const [volData6, setData6] = useState('')
  // const [volData7, setData7] = useState('')
  // const [volData8, setData8] = useState('')
  // const [volData9, setData9] = useState('')

//   const [volData, setData] = useState('')
//   const [volNext, setNext] = useState(0)

//   const [kind, setKind] = useState('')
//   const [zip, setZip] = useState('')
//   const [kindp, setKindp] = useState('')
//   const [zipp, setZipp] = useState('')
  // const ul = {
  //   display: 'none',
  //   float: 'left', 
  // }  
  // https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY
  function g(page) {
    // return axios.get('https://swapi.co/api/people/?page=' + page)
    // return axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
    // "http://localhost:3001/user/5b21a5d7588b40be612798d4"
    // return axios.get('file:///Users/scottrenz/Documents/GitHub/Front-End-III/src/volData.txt')
    return axios.get('https://projects.propublica.org/nonprofits/api/v2?state%5Bid%5D=MD)',
    {headers: {"Access-Control-Allow-Origin": "*"}},{ crossdomain: true })
  }

  let counter = 0
// const [locaList,setLoca] = useState({results: []})
const [times, setTimes] = React.useState(0);

  
  useEffect(() => {
    
    // axios.all([g(1), g(2), g(3), g(4), g(5), g(6), g(7), g(8), g(9)])
    axios
       .get
       (`http://www.wiserearth.org`,{headers: {
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",  
       "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS","Access-Control-Allow-Origin": "*"}},{ crossdomain: true })
       .then(data1 => {
      
        // header.Add("Access-Control-Allow-Origin", "*")
        // header.Add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
        // header.Add("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")

//         query({
//           "text": "This text mentions Los Angeles."
//         }
// req.headers({
// 	"x-rapidapi-host": "webknox-entities.p.rapidapi.com",
// 	"x-rapidapi-key": "d8662479e5msh0f38883568854adp1e13a0jsn07a5efe8297c"
// });
        // query({
        //   "q": "test"
        // });
        // headers({
        //   "x-rapidapi-host": "faroo-faroo-web-search.p.rapidapi.com",
        //   "x-rapidapi-key": "d8662479e5msh0f38883568854adp1e13a0jsn07a5efe8297c"
        // });
      
        // console.log('a data is',data1.data['near_earth_objects'])
        console.log('use call data is',data1)
        setData(
          setData(data1.data['near_earth_objects']) );
          if (times % 1 === 0) {
            setTimes(counter + 1);
          }
   
     }
  )
    .catch (data => { 
      console.log('data error 1',data)
            }
             )
            }, [times,counter]);

}

export default useCallData;
