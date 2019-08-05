import React from "react"
import Form from "./Form";

const Begin = (props) => {

    props.setFresh(true)

  return (
    <div >
    <Form  fresh={props.fresh} setFresh= {props.setFresh}  kind= {props.kind} setKind= {props.setKind} zip= {props.zip} setZip= {props.setZip} vData= {props.vData} volData= {props.volData} />

  </div>
  )};

export default Begin;
