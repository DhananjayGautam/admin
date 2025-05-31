import React from 'react'

const Badge = (props) => {
  return (
    <span className={`inline-block py-1 text-[11px] px-3 rounded-full capitalize 
    ${props.status === "pending" && "bg-[#3872fa] text-white"} 
    ${props.status === "confirm" && "bg-blue-500 text-white"} 
    ${props.status === "delivered" && "bg-green-500 text-white"}`}>
        {props.status}

    </span>
  )
}

export default Badge