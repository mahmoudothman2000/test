import React from 'react'

export default function About() {
  return (<>
  
    <div className='mainAbout'>
      <div className=" container vh-100 mt-5 pt-5">
        <div className="row  mt-5 pt-5">
          <div className="col-md-12 ">
            <div className="headerAbout">
              <h1 className='text-center text-white'>ABOUT COMPONENT</h1>
              <div className='parentHeadMain '>
                <div className='left-component'></div>
                <i className=" StarHead fa-solid fa-star"></i>
                <div className='right-component'></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row  mt-4 text-white">
          <div className="col-md-6 about_item_one">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6 about_item_two">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>

      </div>
    </div>
  </>
    
  )
}
