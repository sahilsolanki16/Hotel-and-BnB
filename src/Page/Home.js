import React from 'react'

export default function Home(props) {
  return (
    <>
        <div className='img1 container-fluid p-0 '>
        <div className=' bg-b container-fluid '>
          <div className='row px-md-0 px-2'>
            <div className='container-fluid text-md-center text-start col-md-12 col-8'>

              <a href="#"> <img src="img/mount-inn-logo.png" /></a>
            </div>

            <nav className="navbar navbar-expand-sm bg-transperant navbar-dark col-md-12 col-4">

              <div className="container-fluid">

                <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mt-md-3" id="collapsibleNavbar">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <a className="nav-link text-light " href="#about us"><span className='cy'>About us</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light" href="#Amenities"><span className='cy'>Amenities</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light" href="#Gallary"><span className='cy'>Gallary</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light" href="#Packages"><span className='cy'>Packages</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light" href="#Booking"><span className='cy'>Booking</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>


          <div className='h100'></div>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-8 mx-auto ' >
                <h1 className='display-1  text-center text-light'><b>{props.t1}</b></h1>
                <p className='text-center fs-5 text-light'>{props.t2}</p>
                <center><button className='px-2 rounded-2 border border-0 bg-y ps-5'><b>MAKE AN ENQUIRY <i class="fa fa-arrow-right fs-6" aria-hidden="true"></i></b></button></center>
              </div>
            </div>

          </div>
          <div className='h350'></div>

        </div>
      </div>

      
    </>
  )
}
