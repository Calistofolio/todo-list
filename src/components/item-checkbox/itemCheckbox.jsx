import React from "react"
import Button from "../button/button"
import './itemCheckbox.css'


function ItemCheckbox(props) {

  return (
    <div class="tasks">
        <input type="checkbox" name={props.name} id={props.index} />
        <label htmlFor={props.index}>{props.item}</label>
        <Button className = "delete" onclick = {props.onclick} title = "Remove"/>
    </div>
  )
}

export default ItemCheckbox
