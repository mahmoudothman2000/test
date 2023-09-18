import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'




export default function Navbar() {

  //&======Handle NavBar Moving By Change In Height ====== :
  // window.addEventListener("scroll" ,function(){
  //   if(this.scrollY < 100){
  //     document.getElementById("navbarMain").style.height = "100px";
  //   }else{
  //     document.getElementById("navbarMain").style.height = "80px";
  //   }
  // })

  let [height , setHeight] =useState("");

  window.addEventListener("scroll" , function(){
    if(this.scrollY < 100){
      setHeight("maxHeight")
    }else{      setHeight("minHeight")}
  })

  return (<>
    <nav  id='navbarMain'  className={  "navbar navbar-expand-lg  fixed-top " + height}  >
      <div className="container">
        <Link className="navbar-brand logoStyle"  to="">START FRAMEWORK</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link  text-white" aria-current="page" to="" >HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="about">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="portfolio">PORTFOLIO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )

}
