import React from 'react'

export default function Gallery(props) {
  return (
    <>
      <div id="Gallary">
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-4 col-8 mx-auto'>
              <h1 className='text-center'>{props.gh1}</h1>
              <p className=' fs-6 text-center' >{props.gh2}</p>
            </div>
          </div>
        </div>


        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-12 col-12'>
              <div className='row'>
                <div className='col-md-3 col-12'>
                  <img src='img/slide1-free-img.jpg' className='col-md-12 col-12 rounded-1'></img>
                </div>
                <div className='col-md-3 col-12'>
                  <img src='img/slide2-free-img.jpg' className='col-md-12 col-12 mt-md-0 mt-5 rounded-1'></img>
                </div>
                <div className='col-md-3 col-12'>
                  <img src='img/slide3-free-img.jpg' className='col-md-12 col-12 mt-md-0 mt-5 rounded-1'></img>
                </div>
                <div className='col-md-3 col-12'>
                  <img src='img/slide5-free-img.jpg' className='col-md-12 col-12 mt-md-0 mt-5 rounded-1'></img>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
