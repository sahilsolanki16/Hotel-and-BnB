import React from 'react'

export default function About(props) {
  return (

    <>
    <div id='about us'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-4 col-8 mx-auto'>
              <h1 className='text-center'> {props.h1}</h1>
              <p className=' fs-5 text-center' >{props.p1}</p>
            </div>
          </div>
        </div>





        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <img src='img/hotel-bar.jpg' className='col-12'></img>
            </div>
            <div className='col-md-6 col-12 '>
              <p className='fs-2 mt-5 '>{props.f1}</p>
              <p><b>Aliquam suscipit felis a arcu laoreet congue. Fusce porta euismod magna, eu vehicula tellus feugiat ac.</b></p>
              <p className='fs18'>{props.p2}</p>
            </div>
          </div>
        </div>
        <div className='h100'></div>


      </div>
      </>
  )
}
