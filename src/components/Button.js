import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <button
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
