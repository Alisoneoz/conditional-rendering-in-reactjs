import  { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [yesNo, setYesNo] = useState(true);
  const [navigation, setNavigation]= useState(false);
  const navigate= useNavigate()

  if(navigation){
    return (<Navigate to="/theotherpage" />)
  }

  return (
    <div className="justify-center text-purple-300 mx-auto flex flex-col">
      <h1 className="text-purple-100 justify-center flex font-bold text-3xl">Home</h1>

      <h2 className='p-8 font-serif text-2xl justify-center flex'>Let's handle different cases of conditional rendering</h2>
      <h3 className='p-6 font-serif text-lg justify-center flex'>Conditional rendering based in State using a button</h3>
      <button 
        onClick={()=>{setYesNo(!yesNo)}}
        className={yesNo ? "bg-green-600 text-green-900": "bg-red-600 text-red-900"}
      >
       {yesNo ? "Yes": "No"}
      </button>

    <div className="mx-auto text-center">
      <h2 className="pt-6 text-2xl ">Navigate to the other page with a navigation button</h2>
        <p className="pt-4 pb-2">Using the declarative method</p>
        <button className="text-sm bg-purple-500 text-purple-900 p-2 w-56 shadow-md font-bold"
          onClick={()=>{setNavigation(true)}}
        >
          Take me to the other page!
        </button>

        <p className="pt-4 pb-2">Using the imperative Method</p>
        <button className="text-sm bg-purple-400 text-purple-900 p-2 w-56 shadow-2xl font-bold "
          onClick={()=>{ navigate("/theotherpage")}}
        >
          Take me to the other page!
        </button>
    </div>
   </div>
  )
}

export default Home 