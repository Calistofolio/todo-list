import React from 'react'
import Button from '../button/button'
import TextInput from '../text-input/textInput'
function AddItemSection() {

  return (
    <>
        <h3>Todo List</h3>
        <TextInput/>
        <Button title = "Add"/>
   </>
  )
}

export default AddItemSection