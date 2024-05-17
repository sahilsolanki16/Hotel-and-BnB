import React from 'react'

export default function Footer(props) {
  return (
    <>
      <div className='container-fluid bg-db'>
        <div className='col-md-12 col-12'>
          <div className='row'>
            <div className='h50'></div>
            <center><img src='img/mount-inn-logo.png' className='col-md-2 col-5  ' /></center>

            <nav className="navbar navbar-expand-sm bg-transperant navbar-dark col-md-12 col-4">
              <div className="container-fluid">
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
            <center> <a href="#" class="fa fa-facebook "></a>
              <a href="#" class="fa fa-snapchat-ghost ms-3"></a>
              <a href="#" class="fa fa-instagram ms-3"></a>
              <a href="#" class="fa fa-google ms-3"></a></center>

            <div className='text-center mt-md-4'>
              <p className='text-light fs20 me-md-5 text-center text-start mt-5 d-b' >{props.fop1}</p>
              <p className='text-light fs20 me-md-5 ms-md-2 text-center text-start mt-3 d-b' >{props.fop2}</p>
              <p className='text-light fs20  text-center text-start mt-3 d-b' >{props.fop3}</p></div>

            <div className='h50'></div>
            <hr className='cdb  border-2' />
            <p className='text-light text-center mt-2'>{props.fop4}</p>
            <div className='h80'></div>


          </div>
        </div>
      </div>
    </>
  )
}
