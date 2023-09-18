import React, { useEffect, useState } from 'react';
import image1 from "../../image/port1.png";
import image2 from "../../image/port2.png";
import image3 from "../../image/port3.png";




export default function Portfolio() {

  let [flex , setFlex] = useState("");
  let [none , setNone] = useState("");



  //&======Mounting Phase====== :
  useEffect(()=>{
    setNone("d-none");
    setFlex("")
  },[])


  //&======Function Display Of Main Image ====== :
  function showData(e){
    setNone("");
    setFlex("d-flex")
    getAttr(e)
    console.log("show");
  }
  
  //&======Function Get Attribute And Change Src to Image ====== :
  function getAttr(e){
    let mainLayer = document.getElementById("mainLayer");
    if(e.target.classList.contains("fa-plus")){
      mainLayer.classList.replace("d-none" , "d-flex");
      let attrElement = e.target.parentElement.previousSibling.getAttribute("src");
      let imageMainLayer = document.getElementById("imageMainLayer");
      imageMainLayer.setAttribute("src" , attrElement);
    }
  }



  //&======Function Hide Of Main Image ====== :
  function hideData(){
    setNone("d-none");
    setFlex("")
    console.log("hide");
  }


  return (<>
  
    <div className="mainContainer position-relative">

      <div onClick={hideData}  id='mainLayer' className={`mainLayer position-fixed top-0 bottom-0 start-0 end-0 vh-100  ` + flex + none} >
        <div className='imageLayer bg-info'>
          <img id='imageMainLayer' src={image1} alt="" className='w-100 h-100' />
        </div>
      </div>

      <div className="container pt-5 mt-5">

        <div className="row  pt-5 mt-5">
          <div className="headerPortfolio">
            <h1 className='headMainPortfolio text-center '>PORTFOLIO COMPONENT</h1>
            <div className='parentHeadMain mb-4'>
              <div className='left-component '></div>
                <i className=" StarHead fa-solid fa-star "></i>
              <div className='right-component '></div>
            </div>
          </div>
        </div>


        <div className="row">


          <div className="col-md-4">
            <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
              <img src={image1} alt="" className='w-100' />
              <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
            </div>
          </div>

          <div className="col-md-4">
            <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
              <img src={image2} alt="" className='w-100' />
              <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
            </div>
          </div>

          <div className="col-md-4">
            <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
              <img src={image3} alt="" className='w-100' />
              <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
            </div>
          </div>

          <div className="col-md-4">
            <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
              <img src={image3} alt="" className='w-100' />
              <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
            </div>
          </div>


          <div className="col-md-4">
            <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
              <img src={image1} alt="" className='w-100' />
              <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
            </div>
          </div>

          <div className="col-md-4">
            <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
              <img src={image2} alt="" className='w-100' />
              <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
            </div>
          </div>


        </div>

      </div>

    </div>
  
  </>
    
  )
}











// ^ Other Solution By Java Script=======================

// import React from 'react';
// import image1 from "../../image/port1.png";
// import image2 from "../../image/port2.png";
// import image3 from "../../image/port3.png";


// export default function Portfolio() {

//   //&======Function Display Of Main Image ====== :
//   function showData(e){
//     let mainLayer = document.getElementById("mainLayer");
//     if(e.target.classList.contains("fa-plus")){
//       mainLayer.classList.replace("d-none" , "d-flex");
//       let attrElement = e.target.parentElement.previousSibling.getAttribute("src");
//       let imageMainLayer = document.getElementById("imageMainLayer");
//       imageMainLayer.setAttribute("src" , attrElement);
//     }else{
//       console.log("Error");
//     }



//     // console.log(attrElement);
//   }

//   //&======Function Hide Of Main Image ====== :
//   function hideData(e){
//     let mainLayer = document.getElementById("mainLayer");
//     mainLayer.classList.replace("d-flex" , "d-none");
//     console.log(e.target);
//   }

//   return (<>
  
//     <div className="mainContainer position-relative">

//       <div onClick={hideData}  id='mainLayer' className="mainLayer position-fixed top-0 bottom-0 start-0 end-0 vh-100 d-none">
//         <div className='imageLayer bg-info'>
//           <img id='imageMainLayer' src={image1} alt="" className='w-100 h-100' />
//         </div>
//       </div>

//       <div className="container pt-5 mt-5">

//         <div className="row  pt-5 mt-5">
//           <div className="headerPortfolio">
//             <h1 className='headMainPortfolio text-center '>PORTFOLIO COMPONENT</h1>
//             <div className='parentHeadMain mb-4'>
//               <div className='left-component '></div>
//                 <i className=" StarHead fa-solid fa-star "></i>
//               <div className='right-component '></div>
//             </div>
//           </div>
//         </div>


//         <div className="row">


//           <div className="col-md-4">
//             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
//               <img src={image1} alt="" className='w-100' />
//               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
//               <img src={image2} alt="" className='w-100' />
//               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
//               <img src={image3} alt="" className='w-100' />
//               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
//               <img src={image3} alt="" className='w-100' />
//               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
//             </div>
//           </div>


//           <div className="col-md-4">
//             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
//               <img src={image1} alt="" className='w-100' />
//               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
//               <img src={image2} alt="" className='w-100' />
//               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
//             </div>
//           </div>


//         </div>

//       </div>

//     </div>
  
//   </>
    
//   )
// }















// import React, { useEffect, useState } from 'react';
// import image1 from "../../image/port1.png";
// import image2 from "../../image/port2.png";
// import image3 from "../../image/port3.png";




// export default function Portfolio() {

//   let [flex , setFlex] = useState("");
//   let [none , setNone] = useState("");



//   //&======Mounting Phase====== :
//   useEffect(()=>{
//     setNone("d-none");
//     setFlex("")
//   },[])


//   //&======Function Display Of Main Image ====== :
//   function showData(e){
//     setNone("");
//     setFlex("d-flex")
//     getAttr(e)
//     console.log("show");
//   }
  
//   //&======Function Get Attribute And Change Src to Image ====== :
//   function getAttr(e){
//     let mainLayer = document.getElementById("mainLayer");
//     if(e.target.classList.contains("fa-plus")){
//       mainLayer.classList.replace("d-none" , "d-flex");
//       let attrElement = e.target.parentElement.previousSibling.getAttribute("src");
//       let imageMainLayer = document.getElementById("imageMainLayer");
//       imageMainLayer.setAttribute("src" , attrElement);
//     }
//   }



//   //&======Function Hide Of Main Image ====== :
//   function hideData(){
//     setNone("d-none");
//     setFlex("")
//     console.log("hide");
//   }


//   return (<>
  
//     <div className="mainContainer position-relative">

//       <div onClick={hideData}  id='mainLayer' className={`mainLayer position-fixed top-0 bottom-0 start-0 end-0 vh-100  ` + flex + none} >
//         <div className='imageLayer bg-info'>
//           <img id='imageMainLayer' src={image1} alt="" className='w-100 h-100' />
//         </div>
//       </div>

//       <div className="container pt-5 mt-5">

//         <div className="row  pt-5 mt-5">
//           <div className="headerPortfolio">
//             <h1 className='headMainPortfolio text-center '>PORTFOLIO COMPONENT</h1>
//             <div className='parentHeadMain mb-4'>
//               <div className='left-component '></div>
//                 <i className=" StarHead fa-solid fa-star "></i>
//               <div className='right-component '></div>
//             </div>
//           </div>
//         </div>


//         <div className="row">


//           <div className="col-md-4">
//             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
//               <img src={image1} alt="" className='w-100' />
//               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
//               <img src={image2} alt="" className='w-100' />
//               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
//               <img src={image3} alt="" className='w-100' />
//               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
//               <img src={image3} alt="" className='w-100' />
//               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
//             </div>
//           </div>


//           <div className="col-md-4">
//             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
//               <img src={image1} alt="" className='w-100' />
//               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
//               <img src={image2} alt="" className='w-100' />
//               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
//             </div>
//           </div>


//         </div>

//       </div>

//     </div>
  
//   </>
    
//   )
// }











// // ^ Other Solution By Java Script=======================

// // import React from 'react';
// // import image1 from "../../image/port1.png";
// // import image2 from "../../image/port2.png";
// // import image3 from "../../image/port3.png";


// // export default function Portfolio() {

// //   //&======Function Display Of Main Image ====== :
// //   function showData(e){
// //     let mainLayer = document.getElementById("mainLayer");
// //     if(e.target.classList.contains("fa-plus")){
// //       mainLayer.classList.replace("d-none" , "d-flex");
// //       let attrElement = e.target.parentElement.previousSibling.getAttribute("src");
// //       let imageMainLayer = document.getElementById("imageMainLayer");
// //       imageMainLayer.setAttribute("src" , attrElement);
// //     }else{
// //       console.log("Error");
// //     }



// //     // console.log(attrElement);
// //   }

// //   //&======Function Hide Of Main Image ====== :
// //   function hideData(e){
// //     let mainLayer = document.getElementById("mainLayer");
// //     mainLayer.classList.replace("d-flex" , "d-none");
// //     console.log(e.target);
// //   }

// //   return (<>
  
// //     <div className="mainContainer position-relative">

// //       <div onClick={hideData}  id='mainLayer' className="mainLayer position-fixed top-0 bottom-0 start-0 end-0 vh-100 d-none">
// //         <div className='imageLayer bg-info'>
// //           <img id='imageMainLayer' src={image1} alt="" className='w-100 h-100' />
// //         </div>
// //       </div>

// //       <div className="container pt-5 mt-5">

// //         <div className="row  pt-5 mt-5">
// //           <div className="headerPortfolio">
// //             <h1 className='headMainPortfolio text-center '>PORTFOLIO COMPONENT</h1>
// //             <div className='parentHeadMain mb-4'>
// //               <div className='left-component '></div>
// //                 <i className=" StarHead fa-solid fa-star "></i>
// //               <div className='right-component '></div>
// //             </div>
// //           </div>
// //         </div>


// //         <div className="row">


// //           <div className="col-md-4">
// //             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
// //               <img src={image1} alt="" className='w-100' />
// //               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
// //             </div>
// //           </div>

// //           <div className="col-md-4">
// //             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
// //               <img src={image2} alt="" className='w-100' />
// //               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
// //             </div>
// //           </div>

// //           <div className="col-md-4">
// //             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
// //               <img src={image3} alt="" className='w-100' />
// //               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
// //             </div>
// //           </div>

// //           <div className="col-md-4">
// //             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
// //               <img src={image3} alt="" className='w-100' />
// //               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
// //             </div>
// //           </div>


// //           <div className="col-md-4">
// //             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
// //               <img src={image1} alt="" className='w-100' />
// //               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
// //             </div>
// //           </div>

// //           <div className="col-md-4">
// //             <div onClick={showData} className="m-4 item position-relative rounded-5 overflow-hidden">
// //               <img src={image2} alt="" className='w-100' />
// //               <div className="layer position-absolute top-0 bottom-0 start-0 end-0 "><i className="fa-solid fa-plus"></i></div>
// //             </div>
// //           </div>


// //         </div>

// //       </div>

// //     </div>
  
// //   </>
    
// //   )
// // }