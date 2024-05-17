import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import About from './Page/About'
import Amenities from './Page/Amenities';
import Gallery from './Page/Gallery';
import Packages from './Page/Packages';
import Booking from './Page/Booking';
import Footer from './Page/Footer';

function App() {
  return (
    <>

      <Home t1="The Mount Inn" t2="Awarded Spa Resort and BnB in Greenville, New Jersey" />

      
      <About f1="25 Years Of Warm Welcome..." h1="About us" p1="Our Tradition Of Best Hospitality" p2="Phasellus accumsan mauris sit amet urna pretium varius. Aliquam suscipit felis a arcu laoreet congue. Habeo nemore appellantur eu usu, usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria te. Et dicunt qualisque vel, eam ubique mucius docendi ne. Debet decore repudiare id mei, homero iuvaret fastidii ius in, no mei alienum accusata."/>


      <Amenities h2="Amenities" p2="Providing Hospitality the Correct Way" imgt1="Home Brewery" imgt2="Coffee Bar" imgt3="Restaurant" imgt4="Room Service" imgt5="24x7 Reception" imgt6="Car Rental" imgt7="Hair Dryer" imgt8="Secure Wi-Fi" bgt1="Lines" bgt2="Toiletries" bgt3="Breakfast" bgt4="Swimming Pool" bgt5="Wellness Spa" bgt6="Fine Dining" bgt7="In-house Bar" bgt8="Banquet Hall" amp1="Escape To The Luxury This Summer" amp2="Habeo nemore appellantur eu usu, usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria  te. Et dicunt qualisque vel, eam ubique mucius docendi ne. Debet decore repudiare id mei, homero iuvaret fastidii ius in, no mei alienum accusata."  />

      <Gallery  gh1="Gallery" gh2="Peek Into Our World"  />
      
      <Packages pah1="Packages" pah2="Choice Of Rooms" pap1="$ 125 / Night" pap2="Single Room" pap3="Lorem ipsum dolor sit amet, consectetur adipiscing elit." pap4="$ 375 / Night" pap5="Executive Suite" pap6="Lorem ipsum dolor sit amet, consectetur adipiscing elit." pap7="$ 225 / Night" pap8="Double Room" pap9="Lorem ipsum dolor sit amet, consectetur adipiscing elit." pap10="$ 425 / Night" pap11="Duplex Suite" pap12="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

      <Booking bop1="Ask Your Queries" bop2="Ask Your Queries" bop3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit <br /> tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
  
      <Footer fop1="+1 800 123 456" fop2="info@domain.com" fop3="34-D, Greenville, NJ" fop4="Copyright © 2024 Hotel and BnB | Powered by Hotel and BnB"/>


    
      
      


      






    </>
  );
}

export default App;
