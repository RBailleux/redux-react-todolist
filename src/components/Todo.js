import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, complete, label }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: complete ? 'line-through' : 'none'
    }}
  >
    {label}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
}

export default Todo
