import React from 'react'
import HeadNav from './HeaderNav';
import Header1 from './Mainhaed';
import Bg24 from '../assests/bg24.png'

export default function Mainpage(props) {
  return (
    <div>
      
      <div className='   bg-no-repeat bg-cover sm:h-[100vh] sm:w-[100wh]  h-full w-full  '  style={{ backgroundImage:`url(${Bg24})` }} >
      {props.children}
   <Header1/>
   </div>


    </div>
  )
}
