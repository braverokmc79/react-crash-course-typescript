import React from 'react'
import { NavLink } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const HeadLog:React.FC=()=>{
  return (
    <>
     <div>
        <NavLink to="/">
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
            width="100"
            height="100"
          />
        </NavLink>
        <NavLink to="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            width="100"
            height="100"
          />
        </NavLink>
      </div>
      <h1 className='white-text'>Vite + React</h1>
    </>
  )
}

export default HeadLog