
import React, { useEffect, useState } from 'react'

export default function Contact() {

  let [show , setShow] = useState("top: -30px;");
  let [hide , setHide] = useState("top: 0px;");
  
  useEffect(()=>{
    setShow("top: -30px;");
    setHide("top: 0px;");
  },[])

  function displayLabel(e){
    if(e.target.value !== ""){
      e.target.previousSibling.style.cssText= show ;
    }else {e.target.previousSibling.style.cssText= hide ;}
  }

  
  return (<>
  
    <div className="container mt-5 pt-5">

      <div className="row mt-5 pt-5">
          <div className="headerContact">
            <h1 className='headMainContact text-center'>CONTACT SECTION</h1>
            <div className='parentHeadMain mb-4'>
              <div className='left-component '></div>
              <i className=" StarHead fa-solid fa-star "></i>
              <div className='right-component '></div>
            </div>
          </div>
      </div>

      <div className="row mt-5 pt-3">
        <div className="col-md-8 offset-md-2">
          <div className='mb-1 itemFormDiv'>
            <label htmlFor="name" className='labelFormContact  text-info fw-bold'>Enter Your User Name :</label>
            <input onChange={displayLabel}   type="text" id='name'  className="inputForm form-control mt-2" placeholder='Enter Your User Name' />
          </div>
          <div className='mb-1 itemFormDiv'>
            <label htmlFor="Age" className='labelFormContact text-info fw-bold'>Enter Your User Age :</label>
            <input onChange={displayLabel}  type="number" id='Age'  className="inputForm form-control mt-2" placeholder='Enter Your User Age' />
          </div>
          <div className='mb-1 itemFormDiv'>
            <label htmlFor="Email" className='labelFormContact text-info fw-bold'>Enter Your User Email :</label>
            <input onChange={displayLabel}  type="email" id='Email'  className="inputForm form-control mt-2" placeholder='Enter Your User Email' />
          </div>
          <div className='mb-2 itemFormDiv'>
            <label htmlFor="Password" className='labelFormContact text-info fw-bold'>Enter Your Email Password :</label>
            <input onChange={displayLabel}  type="password" id='Password'  className="inputForm form-control mt-2" placeholder='Enter Your Email Password' />
          </div>
          <div className='mb-5 itemFormDiv'>
            <button  type="submit"  className="btn btn-success mt-2" width="200px"> Send Message</button>
          </div>
        </div>
      </div>

    </div>
  
  
  </>
    
  )
}





























// ^ Other Solution ======================



// import React from 'react'

// export default function Contact() {

//   function displayLabel(e){
//     if(e.target.value !== ""){
//       e.target.previousSibling.style.cssText="top: -30px;"
//     }else {e.target.previousSibling.style.cssText="top: 0px;"}
//   }

  
//   return (<>
  
//     <div className="container mt-5 pt-5">

//       <div className="row mt-5 pt-5">
//           <div className="headerContact">
//             <h1 className='headMainContact text-center'>CONTACT SECTION</h1>
//             <div className='parentHeadMain mb-4'>
//               <div className='left-component '></div>
//               <i className=" StarHead fa-solid fa-star "></i>
//               <div className='right-component '></div>
//             </div>
//           </div>
//       </div>

//       <div className="row mt-5 pt-3">
//         <div className="col-md-8 offset-md-2">
//           <div className='mb-1 itemFormDiv'>
//             <label htmlFor="name" className='labelFormContact  text-info fw-bold'>Enter Your User Name :</label>
//             <input onChange={displayLabel}   type="text" id='name'  className="inputForm form-control mt-2" placeholder='Enter Your User Name' />
//           </div>
//           <div className='mb-1 itemFormDiv'>
//             <label htmlFor="Age" className='labelFormContact text-info fw-bold'>Enter Your User Age :</label>
//             <input onChange={displayLabel}  type="number" id='Age'  className="inputForm form-control mt-2" placeholder='Enter Your User Age' />
//           </div>
//           <div className='mb-1 itemFormDiv'>
//             <label htmlFor="Email" className='labelFormContact text-info fw-bold'>Enter Your User Email :</label>
//             <input onChange={displayLabel}  type="email" id='Email'  className="inputForm form-control mt-2" placeholder='Enter Your User Email' />
//           </div>
//           <div className='mb-2 itemFormDiv'>
//             <label htmlFor="Password" className='labelFormContact text-info fw-bold'>Enter Your Email Password :</label>
//             <input onChange={displayLabel}  type="password" id='Password'  className="inputForm form-control mt-2" placeholder='Enter Your Email Password' />
//           </div>
//           <div className='mb-5 itemFormDiv'>
//             <button  type="submit"  className="btn btn-success mt-2" width="200px"> Send Message</button>
//           </div>
//         </div>
//       </div>

//     </div>
  
  
//   </>
    
//   )
// }
