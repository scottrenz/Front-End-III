
import { useEffect } from "react"
import axios from 'axios'

function usePost (setData,volData) {
 //obj = JSON.stringify(obj)
 
  useEffect(() => {
    let obj = "description_text=";
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
          axios.all([g(1), g(2), g(3), g(4), g(5), g(6), g(7), g(8), g(9), g(10),g(11), g(12), g(13), g(14), g(15), g(16), g(17), g(18), g(19), g(20)])
      .then(axios.spread(function (data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14,data15,data16,data17,data18,data19,data20)
      {
        setData( volData(volData.concat(data1.data)))
        setData( volData(volData.concat(data2.data)))
        setData( volData(volData.concat(data3.data)))
        setData( volData(volData.concat(data4.data)))
        setData( volData(volData.concat(data5.data)))
        setData( volData(volData.concat(data6.data)))
        setData( volData(volData.concat(data7.data)))
        setData( volData(volData.concat(data8.data)))
        setData( volData(volData.concat(data9.data)))
        setData( volData(volData.concat(data10.data)))
        setData( volData(volData.concat(data11.data)))
        setData( volData(volData.concat(data12.data)))
        setData( volData(volData.concat(data13.data)))
        setData( volData(volData.concat(data14.data)))
        setData( volData(volData.concat(data15.data)))
        setData( volData(volData.concat(data16.data)))
        setData( volData(volData.concat(data17.data)))
        setData( volData(volData.concat(data18.data)))
        setData( volData(volData.concat(data19.data)))
        setData( volData(volData.concat(data20.data)))
        console.log(volData)
    }
    ))
    .catch (data => { 
        console.log('data error 1',data)
              }
               )
              }, []);
  }

export default usePost;
