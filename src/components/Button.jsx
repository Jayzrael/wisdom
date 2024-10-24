import React from 'react'

const Button = ({ Class, Text }) => {
  return (
    <>
      <button className={Class}>{Text}</button>
    </>
  )
}

export default Button