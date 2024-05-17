import React from 'react'

export default function Packages(props) {
  return (
    <>
      <div id="Packages">
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-4 col-8 mx-auto'>
              <h1 className='text-center'>{props.pah1}</h1>
              <p className=' fs-6 text-center' >{props.pah2}</p>
            </div>
          </div>
        </div>
      </div>


      <div className='container'>
        <div className='row'>

          <div className='col-md-6'>
            <div className='col-md-12  col-12 bs  mt-md-0 mt-5'>

              <div className='row'>
                <div className='col-md-6 col-12 img11 p-0'>

                  <div className='h200'></div>
                  <p className='py-3 m-0  text-light bg-db ps-2'>{props.pap1}</p>
                </div>
                <div className='col-md-6 col-12 '>
                  <p className='fs-2 mt-4'>{props.pap2}</p>
                  <p className='fs-6'>{props.pap3}</p>
                  <img src='img/reception.svg' className='col-md-2 col-1 mt-5'></img>
                  <img src='img/wifi-connection.svg' className='col-md-2 col-1 mt-5'></img>
                  <img src='img/car-rental.svg' className='col-md-2 col-1 mt-5'></img>
                  <img src='img/beer.svg' className='col-md-2 col-1 mt-5'></img>
                </div>
              </div>
            </div>
          </div>



          <div className='col-md-6 '>
            <div className='col-md-12 col-12 bs mt-md-0 mt-5'>
              <div className='row'>
                <div className='col-md-6 col-12 img12 p-0'>
                  <div className='h200'></div>
                  <p className='py-3 m-0  text-light bg-db ps-2'>{props.pap4}</p>
                </div>
                <div className='col-md-6 col-12 '>
                  <p className='fs-2 mt-4'>{props.pap5}</p>
                  <p className='fs-6'>{props.pap6}</p>
                  <img src='img/reception.svg' className='col-md-2 col-1 mt-5'></img>
                  <img src='img/wifi-connection.svg' className='col-md-2 col-1 mt-5'></img>
                  <img src='img/car-rental.svg' className='col-md-2 col-1 mt-5'></img>
                  <img src='img/beer.svg' className='col-md-2 col-1 mt-5'></img>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6 '>
            <div className='col-md-12 col-12 bs mt-5'>
              <div className='row'>
                <div className='col-md-6 col-12 img13 p-0'>
                  <div className='h200'></div>
                  <p className='py-3 m-0  text-light bg-db ps-2'>{props.pap7}</p>
                </div>
                <div className='col-md-6  '>
                  <p className='fs-2 mt-4'> {props.pap8} </p>
                  <p className='fs-6'>{props.pap9}</p>
                  <img src='img/reception.svg' className='col-md-2 col-1 mt-5'></img>
                  <img src='img/wifi-connection.svg' className='col-md-2 col-1 mt-5'></img>
                  <img src='img/car-rental.svg' className='col-md-2 col-1 mt-5'></img>
                  <img src='img/beer.svg' className='col-md-2 col-1 mt-5'></img>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6  '>
            <div className='col-md-12 col-12 bs mt-5'>
              <div className='row'>
                <div className='col-md-6 col-12 img14 p-0'>
                  <div className='h200'></div>
                  <p className='py-3 m-0  text-light bg-db ps-2'> {props.pap10}</p>
                </div>
                <div className='col-md-6  '>
                  <p className='fs-2 mt-4'> {props.pap11}</p>
                  <p className='fs-6'>{props.pap12}</p>
                  <img src='img/reception.svg' className='col-md-2 col-1 mt-5'></img>
                  <img src='img/wifi-connection.svg' className='col-md-2 col-1 mt-5'></img>
                  <img src='img/car-rental.svg' className='col-md-2 col-1 mt-5'></img>
                  <img src='img/beer.svg' className='col-md-2 col-1 mt-5'></img>
                  <img src='img/restaurant-icon.svg' className='col-md-2 col-1 mt-5'></img>
                </div>
              </div>
            </div>
          </div>





        </div>
      </div>

      <div className='h100'></div>
    </>
  )
}
