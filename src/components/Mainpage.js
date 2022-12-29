import React from 'react'
import HeadNav from './headerNav';
import Header1 from './mainhaed';
import Bg24 from '../assests/bg24.png'
export default function Mainpage() {
  return (
    <div>
      
      <div className='   bg-no-repeat bg-cover sm:h-[100vh] sm:w-[100wh]  h-full w-full  '  style={{ backgroundImage:`url(${Bg24})` }} >
   <HeadNav/>
   <Header1/>
   </div>


    </div>
  )
}
