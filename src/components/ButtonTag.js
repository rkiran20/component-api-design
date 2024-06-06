import React from 'react'

const ButtonTag = ({href,text}) => {
    const Tag= typeof href ==="string" ? 'a' : "button";
  return (
    <div>
        <Tag>{text}</Tag>
    </div>
  )
}

export default ButtonTag