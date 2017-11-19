import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if(input.value.length > 0){
            dispatch(addTodo(input.value))
            input.value = ''
          }
          return
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Ajouter
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
