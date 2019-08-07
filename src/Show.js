import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import {Column} from "./myStyle"
import './Form.css';
const Show = (props) => {

const resultArr = []
if (props.volData)
{props.vData=props.volData}
for (let i=0;i<props.vData.length;i++)
{if ( 1 || ( props.kind  && props.vData[i]['description'] && props.vData[i]['description'].toLowerCase().includes(props.kind.toLowerCase()) && props.vData[i]['zip code'].includes(props.zip))) 
{ resultArr.push(props.vData[i])
}
}
// function back () {
//   window.location.reload(false);
//   return <div> </div>
// }

    const myFunction = function (element,ix,arr) {
        if (resultArr[ix] &&  ix<(4) )
      { 
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
        {  localStorage.getItem('show') && resultArr.map(myFunction)}
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
           <Link className={'buttonshow3'} to={`/begin`}>Begin</Link>
<Switch>
           <Route path='/none' render={(props) => <Hello {...props} kind={props.kind} />}/>
           <Route path='/begin' render={(prop) => <Refresh {...prop} kind={props.kind} setFresh={props.setFresh} setKind={props.setKind}/>}/>
</Switch>
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

function Refresh (props) {
  // console.log('show refresh is',props.history.length,'kind',props.kind)
  console.log('props refresh is',props)

  let c =parseInt(localStorage.getItem('called'))
 
  if(!props.kind)
  {localStorage.setItem('called', 0)}
else
{
  c =parseInt(localStorage.getItem('called'))
if(props.kind && c===0)
{
  // console.log('first')
  localStorage.setItem('called', props.history.length)
}
else
{
  // console.log('not first')
  c =parseInt(localStorage.getItem('called'))
  if(c!==0 && ( parseInt(props.history.length) !== c))
  {console.log('clicked',c , parseInt(props.history.length))
  localStorage.setItem('called', 0)
  props.setFresh(false)
  props.setKind('')
}
}

}
  return <div> </div>
    }
    function Hello (props) {
      console.log('hello  is',props)
      return <div> </div>
        }
    