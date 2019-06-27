import React from 'react'
import TodoItem from './TodoItem'

export default function TodoContainer(props) {
  const listItems = props.todos.map((item) => {
    return <TodoItem key={item.id} title={item.title} content={item.content} />
  })

  return(
    <React.Fragment>
    {listItems}
    </React.Fragment>
  )
}
