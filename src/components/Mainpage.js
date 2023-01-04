import React from 'react'
import Header1 from './MainHeader';
import Bg24 from '../assests/bg24.png'
import Aboutus from './Aboutus';
import Blog from './blog';
import Footer from './footer';
import Headernavb from './Headernavb';
import Bgwhiteboard from '../assests/bgpink.png';
import Bgscreen from '../assests/bg26.png'
export default function Mainpage() {
  return (
    <div>
      
      <div className='   bg-no-repeat bg-cover sm:h-[100vh] sm:w-[100wh]  h-full w-full bg-gradient-to-tr from-yellow-100 to bg-pink-300  '  style={{ backgroundImage:`url(${Bgscreen})`, }} >
     
   <Header1/>
   </div>
<Aboutus/>

<Footer/>

    </div>
  )
}
