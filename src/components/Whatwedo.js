import React from 'react'
import  Svg1 from '../assests/svg/svg1.svg';
import  Svg2 from '../assests/svg/svg2.svg';
import  Svg3 from '../assests/svg/svg3.svg';
import  Svg4 from '../assests/svg/svg4.svg';
import  Svg5 from '../assests/svg/svg5.svg';
import  Svg6 from '../assests/svg/svg6.svg';
function Whatwedo() {
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);
  const [visible5, setVisible5] = React.useState(false);
  return (
    <div className=' px-6  bg-[#072644] '>
      
      <h className= "  font-bold text-5xl text-white  " > Our services power your digital capability </h>

    <div className='grid grid-cols-2'>
    <div className='col-6' >
    {/* part 1 */}
<div onClick={() => setVisible(!visible)}> 
   <div className=' flex justify-between  '>
   <h className="text-3xl font-semibold hover:text-[#60a1e2] text-white p-3 " >Digital  Transfomation</h>
    <button className='text-3xl font-bold text-white' > {visible ? '-' : '+'} </button>
   </div>
   {visible && <div className='p-3' >
   <div className='border-b-[1px] border-white' ></div>
  <p className='text-white py-2 '> My element sxdscsdc fc cfc e fce</p>
  <button className='hover:text-[#60a1e2] text-white flex gap-2 ' > 
  <svg fill='#ffffff' xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
    Learn more </button>
   </div>}
   <div className='border-b-2 border-white' ></div>
</div>
{/* part 2 */}
<div onClick={() => setVisible2(!visible2)}> 
   <div className=' flex justify-between  '>
   <h className="text-3xl font-semibold hover:text-[#60a1e2] text-white p-3 " >Data Analytics</h>
    <button className='text-3xl font-bold text-white' > {visible2 ? '-' : '+'} </button>
   </div>
   {visible2 && <div className='p-3' >
   <div className='border-b-[1px] border-white' ></div>
  <p className='text-white py-2 '> My element sxdscsdc fc cfc e fce</p>
  <button className='hover:text-[#60a1e2] text-white flex gap-2 ' > 
  <svg fill='#ffffff' xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
    Learn more </button>
   </div>}
   <div className='border-b-2 border-white' ></div>
</div>
{/* part 3 */}
<div onClick={() => setVisible3(!visible3)}> 
   <div className=' flex justify-between  '>
   <h className="text-3xl font-semibold hover:text-[#60a1e2] text-white p-3 " >Web Design</h>
    <button className='text-3xl font-bold text-white' > {visible3 ? '-' : '+'} </button>
   </div>
   {visible3 && <div className='p-3' >
   <div className='border-b-[1px] border-white' ></div>
  <p className='text-white py-2 '> My element sxdscsdc fc cfc e fce</p>
  <button className='hover:text-[#60a1e2] text-white flex gap-2 ' > 
  <svg fill='#ffffff' xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
    Learn more </button>
   </div>}
   <div className='border-b-2 border-white' ></div>
</div>
{/* part 4 */}
<div onClick={() => setVisible4(!visible4)}> 
   <div className=' flex justify-between  '>
   <h className="text-3xl font-semibold hover:text-[#60a1e2] text-white p-3 " >Blockchain</h>
    <button className='text-3xl font-bold text-white' > {visible4 ? '-' : '+'} </button>
   </div>
   {visible4 && <div className='p-3' >
   <div className='border-b-[1px] border-white' ></div>
  <p className='text-white py-2 '> My element sxdscsdc fc cfc e fce</p>
  <button className='hover:text-[#60a1e2] text-white flex gap-2 ' > 
  <svg fill='#ffffff' xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
    Learn more </button>
   </div>}
   <div className='border-b-2 border-white' ></div>
</div>
{/* part 5 */}
<div onClick={() => setVisible5(!visible5)}> 
   <div className=' flex justify-between  '>
   <h className="text-3xl font-semibold hover:text-[#60a1e2] text-white p-3 " >Digital  Transfomation</h>
    <button className='text-3xl font-bold text-white' > {visible ? '-' : '+'} </button>
   </div>
   {visible5 && <div className='p-3' >
   <div className='border-b-[1px] border-white' ></div>
  <p className='text-white py-2 '> My element sxdscsdc fc cfc e fce</p>
  <button className='hover:text-[#60a1e2] text-white flex gap-2 ' > 
  <svg fill='#ffffff' xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
    Learn more </button>
   </div>}
   <div className='border-b-2 border-white' ></div>
</div>
      </div>
<div className='   '>


{
  visible && <div className='flex justify-center'> <img className=' animate-spin ' src={Svg1} /> </div>
} 
{
  visible2 && <div className='flex justify-center'> <img className=' animate-spin ' src={Svg2} /> </div>
}
{
  visible3 && <div className='flex justify-center'> <img className=' animate-spin ' src={Svg6} /> </div>
}
{
  visible4 && <div className='flex justify-center'> <img className=' animate-spin ' src={Svg3} /> </div>
}
{
  visible5 && <div className='flex justify-center'> <img className=' animate-spin ' src={Svg5} /> </div>
}
</div>
    </div>

    </div>
  )
}



export default Whatwedo
