import React from 'react'
import './style.css'
//JSX: 1 parent
//fragment

const MyComponent  = () => {
  const hello =[12,131,21]
  return (
    <>
        <div>{hello} world My Component</div>
        <div className='red'>19218</div>
    </>

  )
}
export default MyComponent;