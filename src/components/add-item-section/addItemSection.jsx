import React from 'react'
import Button from '../button/button'
import TextInput from '../text-input/textInput'
function AddItemSection(props) {

  return (
    <>
        <h3>Todo List</h3>
        <form onSubmit={props.onclick}>
            <TextInput/>
            <Button title = "Add"/>
        </form>
   </>
  )
}

export default AddItemSection