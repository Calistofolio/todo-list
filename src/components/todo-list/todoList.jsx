import React, { useState } from 'react'
import AddItemSection from '../add-item-section/addItemSection'
import ItemCheckbox from '../item-checkbox/itemCheckbox'

function TodoList() {
    const [items, setItems] = useState([])

    function addItem(event){
        event.preventDefault();
        setItems([...items, event.target[0].value])
    }

    function deleteItem(id){
        setItems(items.filter(item => item !== id))
    }

  return (
    <>
      <AddItemSection onclick = {addItem}/>
      {items.map((item, index) => <ItemCheckbox onclick = {() => deleteItem(item)} name = "tarefa1" index = {index} item = {item}/>)}
      
   </>
  )
}

export default TodoList
