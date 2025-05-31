import React from 'react'

const ProgressBar = (props) => {
  return (
    <div className='w-[100px] h-aoto overflow-hidden rounded-md bg-[rgb(241,241,241)]'>
        <span className={`flex items-center w-[${props.value}%] h-[8px]  ${props.type === 'success' &&'bg-green-500'} ${props.type === 'error' &&'bg-red-500'} ${props.type === 'warning' &&'bg-orange-500'}`}>

        </span>

    </div>
  )
}

export default ProgressBar