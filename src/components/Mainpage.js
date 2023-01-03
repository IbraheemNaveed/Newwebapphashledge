import React from 'react'
import Header1 from './MainHeader';
import Bg24 from '../assests/bg24.png'
import Aboutus from './Aboutus';
import Blog from './blog';
import Footer from './footer';
import Headernavb from './Headernavb';
import Bgwhiteboard from '../assests/bgpink.png';
export default function Mainpage() {
  return (
    <div>
      
      <div className='   bg-no-repeat bg-cover sm:h-[100vh] sm:w-[100wh]  h-full w-full bg-yellow-100  '  style={{ backgroundImage:`url(${Bgwhiteboard})`, }} >
     
   <Header1/>
   </div>
<Aboutus/>

<Footer/>

    </div>
  )
}
