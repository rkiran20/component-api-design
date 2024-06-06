import React from 'react'

const Toggle = ({label,checked,onClick}) => {
  return (
    <div>
        <form>
            <label >{label} </label>
            <button  type='button' onClick={onClick} aria-pressed={checked} ></button>
        </form>
    </div>
  )
}

export default Toggle