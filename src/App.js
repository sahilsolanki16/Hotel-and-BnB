import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='img1 container-fluid '>
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
          <div className='row '>
            <div className='col-md-8 mx-auto ' >
              <h1 className='display-1  text-center text-light'><b>The Mount Inn</b></h1>
              <p className='text-center fs-5 text-light'>Awarded Spa Resort and BnB in Greenville, New Jersey</p>
              <center><button className='px-5 py-2 rounded-2 border border-0 bg-y '><b>MAKE AN ENQUIRY <i class="fa fa-arrow-right" aria-hidden="true"></i></b></button></center>
            </div>
          </div>

        </div>
        <div className='h350'></div>

      </div>



      {/* about part div start  */}
      <div id='about us'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-8 mx-auto'>
              <h1 className='text-center'> About us</h1>
              <p className='bg-warning fs-5 text-center' >Our Tradition Of Best Hospitality</p>
            </div>
          </div>
        </div>





        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <img src='img/hotel-bar.jpg' className='col-12'></img>
            </div>
            <div className='col-md-6 col-12 '>
              <p className='fs-2 mt-5 '>24 Years Of Warm Welcome...</p>
              <p><b>Aliquam suscipit felis a arcu laoreet congue. Fusce porta euismod magna, eu vehicula tellus feugiat ac.</b></p>
              <p className='fs18'>Phasellus accumsan mauris sit amet urna pretium varius. Aliquam suscipit felis a arcu laoreet congue. Habeo nemore appellantur eu usu, usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria te. Et dicunt qualisque vel, eam ubique mucius docendi ne. Debet decore repudiare id mei, homero iuvaret fastidii ius in, no mei alienum accusata.</p>
            </div>
          </div>
        </div>
        <div className='h100'></div>


      </div>

      {/* Amenities part div start  */}

      <div id='Amenities'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-4 col-8 mx-auto'>
              <h1 className='text-center'>Amenities</h1>
              <p className=' fs-6 text-center' >Providing Hospitality the Correct Way</p>
            </div>
          </div>
        </div>

        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <div className='row'>
                <div className='col-md-3 col-6'>
                  <img src='img/beer.svg' className='col-md-10 col-6 ms-5 ms-md-0'></img>
                  <p className='ms-md-0 ms-5'>Home Brewery</p>
                </div>
                <div className='col-md-3 col-6'>
                  <img src='img/coffee.svg' className='col-md-10 col-6 ms-md-2 ms-5' ></img>
                  <p className=' text-center col-md-12 col-11'>Coffee Bar</p>
                </div>
                <div className='col-md-3 col-6'>
                  <img src='img/restaurant-icon.svg' className='col-md-10 col-6 ms-md-0 ms-5'></img>
                  <p className='ms-3 text-center col-md-8 col-10'>Restaurant</p>
                </div>
                <div className='col-md-3 col-6'>
                  <img src='img/room-service.svg' className='col-md-10 col-6 ms-md-2 ms-5'></img>
                  <p className=' text-center col-md-12 col-12' >Room Service</p>
                </div>
              </div>
            </div>



            <div className='col-md-6 col-12'>
              <div className='row'>
                <div className='col-md-3 col-6'>
                  <img src='img/reception.svg' className='col-md-10 col-6 ms-5 ms-md-0'></img>
                  <p className='ms-md-0 ms-5'>24x7 Reception</p>
                </div>
                <div className='col-md-3 col-6'>
                  <img src='img/car-rental.svg' className='col-md-10 col-6 ms-md-2 ms-5' ></img>
                  <p className=' text-center col-md-12 col-11'>Car Rental</p>
                </div>
                <div className='col-md-3 col-6'>
                  <img src='img/hair-dryer.svg' className='col-md-10 col-6 ms-md-0 ms-5'></img>
                  <p className='ms-3 text-center col-md-8 col-8'>Hair Dryer</p>
                </div>
                <div className='col-md-3 col-6'>
                  <img src='img/wifi-connection.svg' className='col-md-10 col-6 ms-md-2 ms-5'></img>
                  <p className=' text-center col-md-12 col-12' >Secure Wi-Fi</p>
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
                  <div className='col-md-12 col-12 img2 rounded-2 '>
                    <div className='h80'> </div>
                    <p className=' fs-1 text-center text-light'>Lines</p>
                    <div className='h80'> </div>
                  </div>
                </div>


                <div className='col-md-3 col-12 mt-md-0 mt-5'>
                  <div className='col-md-12 col-12 img3 rounded-2 '>
                    <div className='h80'> </div>
                    <p className='fs-1 text-center text-light'>Toiletries</p>
                    <div className='h80'> </div>
                  </div>
                </div>


                <div className='col-md-3 col-12 mt-md-0 mt-5'>
                  <div className='col-md-12 col-12 img4 rounded-2 '>
                    <div className='h80'> </div>
                    <p className='fs-1 text-center text-light'>Breakfast</p>
                    <div className='h80'> </div>
                  </div>
                </div>

                <div className='col-md-3 col-12 mt-md-0 mt-5'>
                  <div className='col-md-12 col-12 img5 rounded-2 '>
                    <div className='h80'> </div>
                    <p className='fs-2 pt-1 text-center text-light col-md-12'>Swimming Pool</p>
                    <div className='h90'> </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-md-12 col-12  mt-3'>
              <div className='row'>
                <div className='col-md-3 col-12 '>
                  <div className='col-md-12 col-12 img6 rounded-2 '>
                    <div className='h80'> </div>
                    <p className=' fs-1 text-center text-light'>Wellness Spa</p>
                    <div className='h80'> </div>
                  </div>
                </div>


                <div className='col-md-3 col-12 mt-md-0 mt-5'>
                  <div className='col-md-12 col-12 img7 rounded-2 '>
                    <div className='h80'> </div>
                    <p className='fs-1 text-center text-light'>Fine Dining</p>
                    <div className='h80'> </div>
                  </div>
                </div>


                <div className='col-md-3 col-12 mt-md-0 mt-5'>
                  <div className='col-md-12 col-12 img8 rounded-2 '>
                    <div className='h80'> </div>
                    <p className='fs-1 text-center text-light'>In-house Bar</p>
                    <div className='h80'> </div>
                  </div>
                </div>

                <div className='col-md-3 col-12 mt-md-0 mt-5'>
                  <div className='col-md-12 col-12 img9 rounded-2 '>
                    <div className='h80'> </div>
                    <p className='fs-2 pt-1 text-center text-light col-md-12'>Banquet Hall</p>
                    <div className='h90'> </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className='h50'></div>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 col-12 img10'>
              <div class="row">
                <div className='col-md-8 col-12'>
                  <div className='h90'></div>
                  <p className=' text-light  display-5 text-md-start text-center ms-md-5    '>Escape To The Luxury This Summer</p>
                  <p className='text-light ms-md-5  text-md-start text-center fs-5 '>Habeo nemore appellantur eu usu, usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria  te. Et dicunt qualisque vel, eam ubique mucius docendi ne. Debet decore repudiare id mei, homero iuvaret fastidii ius in, no mei alienum accusata.</p>
                </div>
                <div className='col-md-4 col-12 '>
                  <div className='h150'></div>
                  <center><button className='px-5 py-3  rounded-2 border border-0 bg-y '><b>MAKE AN ENQUIRY <i class="fa fa-arrow-right" aria-hidden="true"></i></b></button></center>
                </div>
              </div>
              <div className='h90'></div>


            </div>
          </div>
        </div>
      </div>



      <div className='h100'></div>

      {/* <!-- Gallary part div start  --> */}
      <div id="Gallary">
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-4 col-8 mx-auto'>
              <h1 className='text-center'>Gallery</h1>
              <p className=' fs-6 text-center' >Peek Into Our World</p>
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



      {/* Packages part div start  */}


      <div id="Packages">
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-4 col-8 mx-auto'>
              <h1 className='text-center'>Packages</h1>
              <p className=' fs-6 text-center' >Choice Of Rooms</p>
            </div>
          </div>
        </div>
      </div>


      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-12'>
            <div className='row'>
              <div className='col-md-6 col-12 img11'>
                <div className='h200'></div>
                <div className='bg-db '><p className='py-2 ps-3 text-light'>$ 125 / Night</p></div>
              </div>

              <div className='col-md-6 col-12 '>
                <p>Single Room</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <img></img>
              </div>


            </div>
          </div>
        </div>
      </div>

      <div className='h100'></div>



    </>
  );
}

export default App;
