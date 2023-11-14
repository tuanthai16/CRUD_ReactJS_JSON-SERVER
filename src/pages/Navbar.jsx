import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="w-ful h-16 flex items-center px-14 justify-between bg-[#C92127]">
            <Link to={"/"} className="text-3xl text-white font-semibold font-Montesarrat">ADMIN</Link>
            <Link to={"/add-user"} className="hover:bg-[#C92127]
            hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2">Add Users</Link>
        </div>
    </>
  )
}

export default Navbar