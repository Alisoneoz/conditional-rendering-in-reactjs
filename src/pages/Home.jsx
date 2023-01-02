import  { useState } from "react";

const Home = () => {

  const [yesNo, setYesNo] = useState(true);
  const className=""

  return (
    <div className="ustify-center">
      <h1 className="text-purple-100 justify-center flex font-bold text-3xl">Home</h1>

      <h2 className='p-8 text-purple-300 font-serif text-2xl justify-center flex'>lets handle different cases of conditional rendering</h2>
      <h3 className='p-6 text-purple-300 font-serif text-lg justify-center flex'>Conditional rendering based in State using a button</h3>
      <button 
        onClick={()=>{setYesNo(!yesNo)}}
        className={yesNo ? "bg-green-600 text-green-900": "bg-red-600 text-red-900"}
      >
       {yesNo ? "Yes": "No"}
      </button>
   </div>
  )
}

export default Home 