import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="flex">
      <NavLink className=" bg-purple-400 border rounded-lg p-2"to="/">Home</NavLink>
      <NavLink className=" bg-purple-400 border rounded-lg p-2"to="/theotherpage">The other page</NavLink>
    </div>
  )
}

export default NavBar