import React from 'react';
import imgNotFound from "../../image/error-page.jpg";


export default function Notfound() {
  return (
  <>
    <div className="container text-center ">
      <img src={imgNotFound} alt="" className='w-100 h-50' />
    </div>
  </>
  )
}
