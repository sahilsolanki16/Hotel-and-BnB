import React from 'react'

export default function Booking(props) {
  return (
    <>
      <div id='Booking'>
        <div className='container'>
          <div className='col-md-12 col-12 '>
            <div className='row'>
              <div className='col-md-6 col-12 rounded-1 bg-db'>
                <p className='display-4 text-light ps-3 pt-5'>{props.bop1}</p>
                <input type='text' placeholder='Name*' className='col-md-11 col-11 ms-3 fs-5 border border-0 ps-2 py-2 rounded-1 '></input>
                <input type='Email' placeholder='Email*' className='col-md-11 col-11 ms-3 fs-5 border border-0 ps-2 py-2 rounded-1 mt-3'></input>
                <textarea rows='5' placeholder='Message' className='ms-3 rounded-1 mt-3 fs-5 ps-2 py-2 col-md-11 col-11'></textarea>
                <button className='px-4 py-2 ms-3 border border-0 mt-3 bg-y rounded-2'><b>SEND</b></button>
                <div className='h50'></div>
              </div>

              <div className='col-md-6 col-12'>
                <div className='h-25'></div>
                <center><p className='display-6'>{props.bop2}</p>
                  <p>{props.bop3}</p>
                  <p>Or</p>
                  <button className='px-2 rounded-2 border border-0 bg-y ps-5'><b>MAKE AN ENQUIRY <i class="fa fa-arrow-right fs-6" aria-hidden="true"></i></b></button></center>

              </div>
            </div>
          </div>
        </div>
        <div className='h100'></div>
      </div>
    </>
  )
}
