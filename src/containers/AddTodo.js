import React from 'react'
import {useState} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {Button,Modal} from 'react-bootstrap'


let AddTodo = ({ dispatch }) => {
  let input
  let desc

  const submit=()=>{
    if (!input.trim()) {
      return
    }
    dispatch(addTodo(input,desc))
  }
  
  const [show, setShow] = useState(false);
      
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
              Add Todo 
      </Button>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>   
        <input type="text" placeholder="title" onChange={(e)=>input=e.target.value}/> <br /> <br/>
        <input type="text" placeholder="Description" onChange={(e)=>desc=e.target.value} /></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
                  Close
        </Button>
        <button onClick={submit}>Add Todo</button>
      </Modal.Footer>
   </Modal>
  



   

      </div>

   
  
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
   {/* <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form> */}


       
      

        
