import React from 'react'

export default function TodoItem(props) {


  return(
    <React.Fragment>
    <h1 >{props.title}</h1>
    <h3>{props.content}</h3>
    </React.Fragment>
  )
}
