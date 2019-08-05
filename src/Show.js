import React from 'react';
import { Link } from 'react-router-dom'
import {Column} from "./myStyle"
import './Form.css';

          // const rowStyle1 = {
          //   color: 'dodgerblue',  
          //   width: '600px',  
          //     }
              
          //     const rowStyle2 = {
          //       width: '600px',  
          //         }
              
          //         const rowStyle3 = {
          //           width: '600px',  
          //             }
                    //   const contain = {
                    //   color: 'black',
                    //   backgroundColor: 'white',
                    //   fontSize: '20px',
                    //     border: '2px solid black',
                    //     borderRadius: '5px',
                    //     width: '600px',
                    // }
                      
                                                    
const Show = (props) => {

const resultArr = []
console.log('show vData is',props.vData)
console.log('show vData 0 is',props.vData[0])
console.log('show volData  is',props.volData)
if (props.volData)
{props.vData=props.volData}
for (let i=0;i<props.vData.length;i++)
{if ( 1 || ( props.kind  && props.vData[i]['description'] && props.vData[i]['description'].toLowerCase().includes(props.kind.toLowerCase()) && props.vData[i]['zip code'].includes(props.zip))) 
{ resultArr.push(props.vData[i])
}
}
// props.setKind('')
function back () {
  window.location.reload(false);
  return <div> </div>
}

    const myFunction = function (element,ix,arr) {
        if (resultArr[ix] &&  ix<(4) )
      { 
        console.log('resultarr is',ix,arr[ix])

        return (
<div  key={arr[ix]['name']}>
<Column style={props.kind ? {"display" : 'flex'} : {"display" : 'none'}} className={ix===0 ? 'bottomStyle' : 'bottomStyle2'} >
        <div className={'rowStyle1'} > {arr[ix]['name']}</div>
        <div className={'rowStyle2'}>{arr[ix]['address']}</div>
        <div className={'rowStyle3'}> {arr[ix]['description']}</div>
        </Column>
</div>
       ) }

      } 

    return (
        <div >
        {/* { ( props.vData[0]['name']) !== '' && resultArr.map(myFunction)} */}
        { resultArr.map(myFunction)}
        {/* { ( props.kind !== '' && props.vData[0]['name'] === '' ) && <div>No Results {props.vData.length} {props.kind} {props.vData[0]['name']} {props.volNext}</div>} */}
        { ( !resultArr ) && <div>No Results {props.vData.length} {props.kind} {props.vData[0]['name']} </div>}


<div className='myClass' >            
 <span className='span1'>
            <button className={'buttonshow'}><h3>Who We Are</h3></button>
<Column>
            <button className={'buttonshow'}>Neque porro quisquam est</button>
            <button className={'buttonshow'}>dolorem ipsum quia dolor</button>
            <button className={'buttonshow'}> amet, consectetur,</button>
            <button className={'buttonshow'}>Neque porro quisquam est</button>
            <button className={'buttonshow'}>dolorem ipsum quia dolor</button>
            </Column>            
</span>            
<span className='span2'>
             <button className={'buttonshow'}><h3>Contact</h3></button>
            <Column>
            <button className={'buttonshow'}>2222 Infinity Loop</button>
            <button className={'buttonshow'}>Blay blah, VA 99999-0000</button>
            <br></br>
            <button className={'buttonshow'}>contact@blah.com</button>
            </Column>
</span>            
<span className='span3'>
 
            <button className={'buttonshow'}><h3>About Us</h3></button>
            <Column>
            <div></div>
           <button className={'buttonshow2'}><Link className='begin' to={`/begin`} onClick={back}>Begin</Link></button>
           <button className={'buttonshow2'}>Home</button>
           <button className={'buttonshow2'}>About Us</button>
            <button className={'buttonshow2'}>Vounteering</button>
            <button className={'buttonshow2'}>Safety</button>
            <button className={'buttonshow2'}>Partners</button>
            <button className={'buttonshow2'}>Login</button>
            </Column>
</span> 
</div>           

        </div>
  );
};

export default Show;