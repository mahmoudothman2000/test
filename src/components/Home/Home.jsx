import React from 'react';
import image1 from "../../image/avataaars.svg";


export default function Home() {

  return (
    <>
    {console.log("good")}
      <div className="container-fluid vh-100 containerHome" >
        <div className="content-home w-50 text-center pt-4 mt-5">

          <div className="image-home w-50 m-auto mb-3">
            <img src={image1} alt="" className='w-75 mt-5 ' />
          </div>

          <div className="headerHome">
            <h1 className='text-center text-white'>START FRAMEWORK</h1>
            <div className='parentHeadMain mb-4'>
              <div className='left-component'></div>
              <i className=" StarHead fa-solid fa-star"></i>
              <div className='right-component'></div>
            </div>
          </div>

          <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>

        </div>
      </div>
    </>
  )
}


