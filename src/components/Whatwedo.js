import React, { useState } from 'react'
import Svg1 from '../assests/svg/svg1.svg';
import Svg3 from '../assests/svg/svg3.svg';
import Svg5 from '../assests/svg/svg5.svg';
import Svg6 from '../assests/svg/svg6.svg';
import { useContext } from 'react';
import { BlogStore } from '../BlogStore';
function Whatwedo() {
  const [visible, setVisible] = useState('');
  const {test} = useContext(BlogStore);
  return (
    <div className=' px-6  bg-[#072644] '>

      <h className="  font-bold text-5xl text-white  " > Our services power your digital capability </h>

      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div className='' >
          {/* part 1 */}

          <div onClick={() => setVisible("Digital Transfromation")}>
            <div className=' flex justify-between  '>
              <h className="text-3xl font-semibold hover:text-[#60a1e2] text-white p-3 " >Digital  Transfomation</h>
              <button className='text-3xl font-bold text-white' > {visible === "Digital Transfromation" ? '-' : '+'} </button>
            </div>
            {visible === "Digital Transfromation" ? <div className='p-3' >
              <div className='border-b-[1px] border-white' ></div>
              <p className='text-white py-2 '> My element sxdscsdc fc cfc e fce</p>
              <button className='hover:text-[#60a1e2] text-white flex gap-2 ' >
                <svg fill='#ffffff' xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
                Learn more </button>
            </div> : null}
            <div className='border-b-2 border-white' ></div>
          </div>
          {/* part 2 */}
          <div onClick={() => setVisible("Data Analytics")}>
            <div className=' flex justify-between  '>
              <h className="text-3xl font-semibold hover:text-[#60a1e2] text-white p-3 " >Data Analytics</h>
              <button className='text-3xl font-bold text-white' > {visible === "Data Analytics" ? '-' : '+'} </button>
            </div>
            {visible === "Data Analytics" ? <div className='p-3' >
              <div className='border-b-[1px] border-white' ></div>
              <p className='text-white py-2 '> My element sxdscsdc fc cfc e fce</p>
              <button className='hover:text-[#60a1e2] text-white flex gap-2 ' >
                <svg fill='#ffffff' xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
                Learn more </button>
            </div> : null}
            <div className='border-b-2 border-white' ></div>
          </div>
          {/* part 3 */}
          <div onClick={() => setVisible("Web Design")}>
            <div className=' flex justify-between  '>
              <h className="text-3xl font-semibold hover:text-[#60a1e2] text-white p-3 " >Web Design</h>
              <button className='text-3xl font-bold text-white' > {visible === "Web Design" ? '-' : '+'} </button>
            </div>
            {visible === "Web Design" ? <div className='p-3' >
              <div className='border-b-[1px] border-white' ></div>
              <p className='text-white py-2 '> My element sxdscsdc fc cfc e fce</p>
              <button className='hover:text-[#60a1e2] text-white flex gap-2 ' >
                <svg fill='#ffffff' xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
                Learn more </button>
            </div> : null}
            <div className='border-b-2 border-white' ></div>
          </div>
          {/* part 4 */}
          <div onClick={() => setVisible("Blockchain")}>
            <div className=' flex justify-between  '>
              <h className="text-3xl font-semibold hover:text-[#60a1e2] text-white p-3 " >Blockchain</h>
              <button className='text-3xl font-bold text-white' > {visible === "Blockchain" ? '-' : '+'} </button>
            </div>
            {visible === "Blockchain" ? <div className='p-3' >
              <div className='border-b-[1px] border-white' ></div>
              <p className='text-white py-2 '> My element sxdscsdc fc cfc e fce</p>
              <button className='hover:text-[#60a1e2] text-white flex gap-2 ' >
                <svg fill='#ffffff' xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
                Learn more </button>
            </div> : null}
            <div className='border-b-2 border-white' ></div>
          </div>
        </div>
        <div className='   '>
          {
            visible === "Digital Transfromation" ?
              <div className='flex justify-center'> <img className=' animate-spin ' src={Svg1} /> </div>
              : visible === "Data Analytics" ?
                <div className='flex justify-center'> <img className=' animate-spin ' src={Svg6} /> </div>
                : visible === "Web Design" ?
                  <div className='flex justify-center'> <img className=' animate-spin ' src={Svg3} /> </div>
                  : <div className='flex justify-center'> <img className=' animate-spin ' src={Svg5} /> </div>
          }
        </div>

      </div>
      <h1>{test}</h1>
    </div>
  )
}



export default Whatwedo
