import React from 'react'
import Header1 from './MainHeader';
import Bg24 from '../assests/bg24.png'
import Aboutus from './Aboutus';
import Blog from './blog';
import Footer from './footer';
import Headernavb from './Headernavb';
export default function Mainpage() {
  return (
    <div>
      
      <div className='   bg-no-repeat bg-cover sm:h-[100vh] sm:w-[100wh]  h-full w-full  '  style={{ backgroundImage:`url(${Bg24})` }} >
     
   <Header1/>
   </div>
<Aboutus/>
<Blog/>
<Footer/>

    </div>
  )
}
