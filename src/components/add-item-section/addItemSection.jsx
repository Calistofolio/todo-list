import React from 'react'
import Button from '../button/button'
import TextInput from '../text-input/textInput'
import "./addItemSection.css"
function AddItemSection(props) {

  return (
    <div class="addItems">
        <h3>Todo List</h3>
        <form onSubmit={props.onclick}>
            <TextInput/>
            <Button className = "add" title = "Add"/>
        </form>
   </div>
  )
}

export default AddItemSection