import React from 'react'

export default function Amenities(props) {
  return (
    <>
      <div id='Amenities'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-4 col-8 mx-auto'>
              <h1 className='text-center'>{props.h2}</h1>
              <p className=' fs-6 text-center' >{props.p2}</p>
            </div>
          </div>
        </div>

        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <div className='row'>
                <div className='col-md-3 col-6'>
                  <img src='img/beer.svg' className='col-md-10 col-6 ms-5 ms-md-0'></img>
                  <p className='ms-md-0 ms-5'>{props.imgt1}</p>
                </div>
                <div className='col-md-3 col-6'>
                  <img src='img/coffee.svg' className='col-md-10 col-6 ms-md-2 ms-5' ></img>
                  <p className=' text-center col-md-12 col-11'>{props.imgt2}</p>
                </div>
                <div className='col-md-3 col-6'>
                  <img src='img/restaurant-icon.svg' className='col-md-10 col-6 ms-md-0 ms-5'></img>
                  <p className='ms-3 text-center col-md-8 col-10'>{props.imgt3}</p>
                </div>
                <div className='col-md-3 col-6'>
                  <img src='img/room-service.svg' className='col-md-10 col-6 ms-md-2 ms-5'></img>
                  <p className=' text-center col-md-12 col-12' >{props.imgt4}</p>
                </div>
              </div>
            </div>



            <div className='col-md-6 col-12'>
              <div className='row'>
                <div className='col-md-3 col-6'>
                  <img src='img/reception.svg' className='col-md-10 col-6 ms-5 ms-md-0'></img>
                  <p className='ms-md-0 ms-5'>{props.imgt5}</p>
                </div>
                <div className='col-md-3 col-6'>
                  <img src='img/car-rental.svg' className='col-md-10 col-6 ms-md-2 ms-5' ></img>
                  <p className=' text-center col-md-12 col-11'>{props.imgt6}</p>
                </div>
                <div className='col-md-3 col-6'>
                  <img src='img/hair-dryer.svg' className='col-md-10 col-6 ms-md-0 ms-5'></img>
                  <p className='ms-3 text-center col-md-8 col-8'>{props.imgt7}</p>
                </div>
                <div className='col-md-3 col-6'>
                  <img src='img/wifi-connection.svg' className='col-md-10 col-6 ms-md-2 ms-5'></img>
                  <p className=' text-center col-md-12 col-12' >{props.imgt8}</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='h80'></div>

        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-12 '>
              <div className='row'>
                <div className='col-md-3 col-12 '>
                  <div className='col-md-12 col-12 img2  rounded-2 '>
                    <div className='bg-b'>
                      <div className='h80'> </div>
                      <p className=' fs-1 text-center text-light'>{props.bgt1}</p>
                      <div className='h80'> </div>
                    </div>
                  </div>
                </div>


                <div className='col-md-3 col-12 mt-md-0 mt-5'>
                  <div className='col-md-12 col-12 img3 rounded-2 '>
                    <div className='bg-b'>
                      <div className='h80'> </div>
                      <p className='fs-1 text-center text-light'>{props.bgt2}</p>
                      <div className='h80'> </div>
                    </div>
                  </div>
                </div>


                <div className='col-md-3 col-12 mt-md-0 mt-5'>
                  <div className='col-md-12 col-12 img4 rounded-2 '>
                    <div className='bg-b'>
                      <div className='h80'> </div>
                      <p className='fs-1 text-center text-light'>{props.bgt3}</p>
                      <div className='h80'> </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-3 col-12 mt-md-0 mt-5'>
                  <div className='col-md-12 col-12 img5 rounded-2 '>
                    <div className='bg-b'>
                      <div className='h80'> </div>
                      <p className='fs-2 pt-1 text-center text-light col-md-12'>{props.bgt4}</p>
                      <div className='h90'> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-md-12 col-12  mt-3'>
              <div className='row'>
                <div className='col-md-3 col-12 '>
                  <div className='col-md-12 col-12 img6 rounded-2 '>
                    <div className='bg-b'>
                      <div className='h80'> </div>
                      <p className=' fs-1 text-center text-light'>{props.bgt5}</p>
                      <div className='h80'> </div>
                    </div>
                  </div>

                </div>


                <div className='col-md-3 col-12 mt-md-0 mt-5'>
                  <div className='col-md-12 col-12 img7 rounded-2 '>
                    <div className='bg-b'>
                      <div className='h80'> </div>
                      <p className='fs-1 text-center text-light'>{props.bgt6}</p>
                      <div className='h80'> </div>
                    </div>
                  </div>
                </div>


                <div className='col-md-3 col-12 mt-md-0 mt-5'>
                  <div className='col-md-12 col-12 img8 rounded-2 '>
                    <div className='bg-b'>
                      <div className='h80'> </div>
                      <p className='fs-1 text-center text-light'>{props.bgt7}</p>
                      <div className='h80'> </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-3 col-12 mt-md-0 mt-5'>
                  <div className='col-md-12 col-12 img9 rounded-2 '>
                    <div className='bg-b'>
                      <div className='h80'> </div>
                      <p className='fs-2 pt-1 text-center text-light col-md-12'>{props.bgt8}</p>
                      <div className='h90'> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className='h50'></div>

        <div className='container-fluid'>

          <div className='row'>
            <div className='col-md-12 col-12 img10  p-0'>
              <div className='bg-b container-fluid'>

                <div class="row">
                  <div className='col-md-8 col-12'>

                    <div className='h90'></div>
                    <p className=' text-light  display-5 text-md-start text-center ms-md-5 '>{props.amp1}</p>
                    <p className='text-light ms-md-5  text-md-start text-center fs-5 '>{props.amp2}</p>
                  </div>
                  <div className='col-md-4 col-12'>
                    <div className='h150'></div>
                    <center><button className='px-2 rounded-2 border border-0 bg-y ps-5'><b>MAKE AN ENQUIRY <i class="fa fa-arrow-right fs-6" aria-hidden="true"></i></b></button></center>
                  </div>
                </div>
                <div className='h90'></div>

              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='h100'></div>
    </>
  )
}
