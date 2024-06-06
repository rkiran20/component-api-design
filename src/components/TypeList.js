import React from 'react'

const TypeList = ({type="li",text}) => {
    const Tag = type==="ul" ? "ul": "li"
  return (
    <div>
        <Tag>{text}</Tag>
    </div>
  )
}

export default TypeList