
import axios from 'axios'

function usePost (setData,volData) {
let obj = "description_text=";
 //obj = JSON.stringify(obj)
 
 function g(page) {
  return axios
  .post(`//50.62.56.186:8000/find`,obj,{
      headers:{
        // 'Authorization':`Barer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': "text/html; charset=utf-8"
     
      }
    })
  }
  useEffect(() => {
    axios.all([g(1), g(2), g(3), g(4), g(5), g(6), g(7), g(8), g(9), g(10)])
      .then(axios.spread(function (data1,data2,data3,data4,data5,data6,data7,data8,data9,data10)
      {
        setData( volData( res.data1))
        setData( volData( res.data2))
        setData( volData( res.data3))
        setData( volData( res.data4))
        setData( volData( res.data5))
        setData( volData( res.data6))
        setData( volData( res.data7))
        setData( volData( res.data8))
        setData( volData( res.data9))
        setData( volData( res.data10))
    }
    )
    .catch(err =>console.log(err))
}

export default usePost;
