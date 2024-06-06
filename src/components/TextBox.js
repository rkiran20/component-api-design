import React from 'react'

const TextBox = ({label,...delegation}) => {
  return (
    <div className='textBox'> 
        <form>
            <label>{label}</label>
            <input type='range' {...delegation}></input>
        </form>
        this is implemented by using prop delegation method
    </div>
  )
}

export default TextBox