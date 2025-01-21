import React from "react"
import Button from "../button/button"


function ItemCheckbox(props) {

  return (
    <>
        <input type="checkbox" name={props.name} id={props.index} />
        <label htmlFor={props.index}>{props.item}</label>
        <Button title = "remove"></Button>
    </>
  )
}

export default ItemCheckbox
