import React from 'react';
import useForm from "./useForm";
import {GridView,Bir,Input,Button} from "./myStyle"
import hdImage from "./bg.png";
import './Form.css';


// const techCompanies = [
//   "Apple", "Facebook","Netflix", "Tesla","Amazon","Alphabet"
// ];

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
      width: '90%',
      marginLeft: '-30%',
      minWidth: '200px', 
      }
                const imgStyle = {
width: '50%',
minWidth: '200px',
position: 'absolute',
top: '0%',
left: '30%'
}
const Form = (props) => {
  const { values, handleChange, handleSubmit } = useForm(getData);
  function getData(values) {
    props.setKind(values.kind.trim())
    props.setZip(values.zip)

}
  return (
    <div  >
      <img alt='' src={hdImage} style={( props.kind) ? {"display" : "none"} : imgStyle }/>
  <GridView className="section is-fullheight">
    <div className="container">
      <div className="column is-4 is-offset-4">
        <div className="box">

        <form onSubmit={handleSubmit} id='how'
>
<Bir style={(props.kind) ? {"top" : "0%"} : {"top" : "10%"} }>            
<div className="field"  style={(props.kind) ? fieldStyle : fieldStyle } >
        <label className="label" style={props.kind ? {"display" : "none"} : {"display" : "flex"}} >What kind of Non-Profit are You Looking For?</label>
              <div className="control">
              <Input placeholder='What are you looking for?' className="input" size='100' type="text" name="kind" onChange={handleChange} value={values.kind} required />
              {/* <Select options={ techCompanies } /> */}

              </div>
            </div>
            <div className="field"   style={(props.kind) ? fieldStyle : fieldStyle } >
        <label  className="label" style={props.kind ? {"display" : "none"} : {"display" : "flex"}} >Zip Code</label>
              <div className="control">
              <Input placeholder='Enter zip code' className="input" size='5' type="number" min='20588' max='21930' name="zip" onChange={handleChange} value={values.zip} required />
              {/* <Select options={ techCompanies } /> */}
              </div>
            </div>
            <Button className={(props.kind) ? 'buttonStyle2' : 'buttonStyle1' } type="submit"> {(props.kind) ? 'New Search' : 'Find Non-Profit'}</Button>

</Bir>
{/* <Show kind={props.kind} kindp={props.kindp} setKindp={props.setKindp} zip={props.zip} setZip={props.setZip} zipp={props.zipp} setZipp={props.setZipp} vData={props.vData} volNext={props.volNext} setNext={props.setNext} ></Show> */}
            </form>
          </div>
        </div>
      </div>
    </GridView>
    </div>
  );
};

export default Form;
