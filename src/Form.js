import React from 'react';
import useForm from "./useForm";
import {GridView,Bir,Input,Button} from "./myStyle"
const Form = (props) => {
    const { values, handleChange, handleSubmit } = useForm(getData);
function getData(kind) {

    props.setName(props.kind.concat(kind))
}
    return (
    <GridView className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">

          <form onSubmit={handleSubmit}>
<Bir>            
          <div className="field">
                <label className="label">What kind of Non-Profit are You Looking For?</label>
                <div className="control">
                <Input className="input" size='100' type="text" name="kind" onChange={handleChange} value={values.kind} required />
                </div>
              </div>
              <Button type="submit" className="button is-block is-info is-fullwidth">Find Non-Profit</Button>
</Bir>

            </form>
<span>
            <h3>Who We Are</h3>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
</span>            
<span>
            <h3>Contact</h3>
            <p>2222 Infinity Loop</p>
            <p>Blay blah, VA 99999-0000</p>
            <p></p>
            <p>contact@blah.com</p>
</span>            
<span>
            <h3>About Us</h3>
            <p></p>
            <a  href='#' >About Us</a>
            <a  href='#' >Vounteering</a>
            <a  href='#' >Safety</a>
            <a  href='#' >Partners</a>
            <a  href='#' >Login</a>
</span>            
          </div>
        </div>
      </div>
    </GridView>
  );
};

export default Form;
