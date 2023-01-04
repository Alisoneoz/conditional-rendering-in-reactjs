import React from 'react'
import { useState } from "react"

const TheOtherPage = () => {

  const[ yesNO, setYesNo ] = useState(true);

  const handleClick = () => {
    setYesNo(!yesNO)
  }
  

  const conditionalClassName = yesNO ? "bg-green-500" : "bg-red-500"; 
  return (
    <div className='justify-center mx-auto'>
      <h2 className="text-purple-400 font-bold text-3xl text-center my-8">The Other Page</h2>
      <h3 className='text-center p-4 text-purple-400 font-bold'>Conditional rendering with contional styles defined as a variable</h3>
      <button className={`p-2 font-bold ${conditionalClassName}`} onClick={handleClick}>{yesNO ? "Yes" : "No"} </button>

    </div>
  )
}

export default TheOtherPage