import React from 'react'
import AddItemSection from './components/add-item-section/addItemSection'
import ItemCheckbox from './components/item-checkbox/itemCheckbox'
import './App.css'

function App() {

  return (
    <>
      <AddItemSection></AddItemSection>
      <ItemCheckbox name = "tarefa1" index = "2" item = "lavar cabelo"></ItemCheckbox>
   </>
  )
}

export default App
