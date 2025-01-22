import React from "react"
import "./button.css"


function Button(props) {

  return (
    <>
        <button class = {props.className} onClick={props.onclick}>{props.title}</button>
    </>
  )
}

export default Button
