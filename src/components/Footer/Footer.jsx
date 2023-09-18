import React from 'react'

export default function Footer() {
  return <footer className='bg-dark   text-white text-center '>
    <div className="container-fluid">
      <div className="parentFooter row">

        <div className='col-md-4 p-4'>
          <div className="item p-3">
            <h2 className='h3'>LOCATION</h2>
            <p className='m-3'>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
        </div>

        <div className='col-md-4 p-4'>
          <div className="item p-3">
            <h2 className='h3'>AROUND THE WEB</h2>
            <div className="icon mt-3">
              <span><i className="fa-brands fa-facebook mx-1 icon  mx-2 p-2 border border-1 rounded-circle iconSocial"></i></span>
              <span><i className="fa-brands fa-twitter mx-1 icon  mx-2 p-2 border border-1 rounded-circle iconSocial"></i></span>
              <span><i className="fa-brands fa-linkedin-in mx-1 icon  mx-2 p-2 border border-1 rounded-circle iconSocial"></i></span>
              <span><i className="fa-solid fa-globe mx-1 icon  mx-2 p-2 border border-1 rounded-circle iconSocial"></i></span>
            </div>
          </div>
        </div>

        <div className='col-md-4 p-4'>
          <div className="item p-3">
            <h2 className='h3'>ABOUT FREELANCER</h2>
            <p className='my-2'>Freelance is a free to use, licensed Bootstrap theme <br/> created by Route</p>
          </div>
        </div>

      </div>

    </div>
      <div className="footerDiv">
        <p className='m-0'>Copyright © Your Website  2021</p>
      </div>
  </footer>
}

