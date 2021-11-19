import React from 'react'


const Todo = ({ onClick, completed, text,desc }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <div>
      {text}
    </div>
    <div>
      {desc}
    </div>
    <hr/>

  

  </li>
)


export default Todo
