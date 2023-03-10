import React from 'react'
import bgg from '../assests/bg.jpg';
import webdev from '../assests/web.png'
import svgimg from '../assests/imgg.svg'
import Ai from '../assests/ai.jpg'
import p1 from '../assests/NewAssets/P1.png'
import Whatwedo from '../assests/NewAssets/whatwe.png'
import Webdev from './services/Webde'
import P2 from '../assests/NewAssets/P2.png'
import Gettoknowus from '../assests/NewAssets/gettoknowus.png'
import { Link } from 'react-router-dom';
import Digital from '../assests/NewAssets/DigitalTransformation.png';
import Dataanaly from '../assests/NewAssets/DataAnalytics.png'
import Webdesign from '../assests/NewAssets/webdesign.png'
import Blockcahin from '../assests/NewAssets/Blockchain.png'
import Webdesign23 from '../assests/webdesign2.png'
const Aboutus = () => {
    return (
<>


<head>
   <link rel="preconnect" href="https://fonts.googleapis.com"/>
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
   <link href="https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap" rel="stylesheet"/>
</head>

<div className='bg-transparent container mx-auto  ' >
<div className='flex flex-col-reverse sm:flex-row m-12 gap-8  '>
        <div className='sm:text-left text-center flex flex-col gap-3 sm:w-1/2 w-full '>
            <h className='sm:text-3xl md:text-4xl   font-bold text-center font-display text-[#0e5ba6] ' >
            What We Do 
            </h>
            <p className=' md:text-2xl sm:text-lg text-[#072644]  '>
            As an IT consultancy, we specialize in helping businesses and organizations resolve problems through digital transformation, data analysis, web design and development, and blockchain.
            </p>
            <p className='md:text-2xl sm:text-lg text-[#072644]'>
            Our team of experienced professionals has a strong track record of delivering successful projects for our clients. We work with you to understand your specific needs and challenges, and then develop customized solutions that address those issues and help drive your business forward.
            </p>
            {/* <div className=' border-l-4 border-red-600 flex px-6'>
           <p className='text-red-600 font-semibold hover:text-yellow-300  '>Every.single.Time</p>
           </div> */}
        </div>
        <div className='sm:w-1/2 flex justify-center w-full'>  
            <img className='w-96 rounded-2xl ' src={Whatwedo} />
        </div>
    </div>
    <div className='flex flex-col-reverse sm:flex-row m-12 gap-8 '>
        
        <div className='sm:w-1/2 flex justify-center w-full'  >
            <img className='w-96 rounded-2xl ' src={Gettoknowus} />
        </div>
        <div className='sm:text-left  flex text-center flex-col gap-4 sm:w-1/2 w-full '>
            <h className=' sm:text-3xl md:text-4xl font-bold text-center font-display text-[#0e5ba6] ' >
            Get to know us
            </h>
            <p className=' md:text-2xl sm:text-lg  text-[#072644] '>
            Hash Ledge was born to be different. We are consultants, but not as you know them. 
            </p>
            <p className='md:text-2xl sm:text-lg  text-[#072644]'>
            We dive right in with our clients and help them across all areas of technology transformation, design.
            </p>
           {/* <div className=' border-l-4 border-red-600 flex px-6'>
           <p className='text-red-600 font-semibold hover:text-yellow-300  '>Find out more</p>
           </div> */}
        </div>
    </div>
</div>
   
    {/* why it is so great comp  */}
    {/* <div className='container my-24 px-6 mx-auto'>
<div className='mb-32 text-gray-800 text-center'>
    <div className='flex justify-center'>
        <div className='text-center max-w-[700px]'>
<h className='text-3xl font-bold mb-6 text-center' >
Why is it so<u class="text-red-600"> great?</u>
</h>
<p class="text-gray-500 mb-12">
          Minus fuga aliquid vero facere ducimus quos, quisquam nemo? Molestias ullam provident
          vitae error aliquam dolorum temporibus? Doloremque, quasi
        </p>
        </div>
    </div>
    <div className='grid md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12' >
        <div className='mb-12 lg:mb-0'>
        <div className='p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6' >
        <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
            </path>
          </svg>
        </div>
        <h5 class="text-lg font-bold mb-4">Support 24/7</h5>
        <p class="text-gray-500">
          Laudantium totam quas cumque pariatur at doloremque hic quos quia eius. Reiciendis
          optio minus mollitia rerum labore
        </p>

        </div>

        <div class="mb-12 lg:mb-0">
        <div class="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
          <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z">
            </path>
          </svg>
        </div>
        <h5 class="text-lg font-bold mb-4">Safe and solid</h5>
        <p class="text-gray-500">
          Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam aspernatur odio
          soluta, quisquam dolore animi
        </p>
      </div>
      <div class="mb-12 md:mb-0">
        <div class="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
          <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path fill="currentColor"
              d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z">
            </path>
          </svg>
        </div>
        <h5 class="text-lg font-bold mb-4">Extremely fast</h5>
        <p class="text-gray-500">
          Enim cupiditate, minus nulla dolor cumque iure eveniet facere ullam beatae hic
          voluptatibus dolores exercitationem
        </p>
      </div>
      <div class="mb-12 md:mb-0">
        <div class="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
          <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512">
            <path fill="currentColor"
              d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z">
            </path>
          </svg>
        </div>
        <h5 class="text-lg font-bold mb-4">Live analytics</h5>
        <p class="text-gray-500">
          Illum doloremque ea, blanditiis sed dolor laborum praesentium maxime sint, consectetur
          atque ipsum ab adipisci
        </p>
      </div>
    </div>
</div>
    </div> */}
    {/* services */}
    {/* <div className='container my-24 px-6 mx-auto py-6  bg-transparent bg-[to="/graphic"]  ' > 
    <div className='mb-32 text-gray-800 text-center w-full '>
    <h2 class="text-3xl  font-bold mb-12 font-display text-[#072644]">Our services  </h2>
<div className='grid md:grid-cols-2 gap-x-6 gap-y-12 lg:gap-x-12' >
<div className='mb-6 lg:mb-0'>


</div>
<div className='mb-6 lg:mb-0'>
<div className='block rounded-lg shadow-lg'>
<div className='relative overflow-hidden bg-no-repeat bg-cover'>

 <div className='relative'>
<img className=' w-full h-72  rounded-t-lg rounded-2xl  ' src={Dataanaly} />
<Link to="/blockchain">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
 </Link>
 <div>
 <img className='bg-inherit  absolute bottom-0  ' src={svgimg} />
 </div>
</div>
 <div class="px-6  ">
            <h5 class="text-lg text-[#0e5ba6] font-bold mb-4 font-display">Data Analytics</h5>
            <p class=" text-[#072644]  mb-4">We use data to help our clients make better informed decisions. This may involve collecting and analyzing data from various sources, developing dashboards and reports, or providing data-driven insights and recommendations.</p>
            </div>
</div>
</div>

</div>
<div className='mb-6 lg:mb-0'>
<div className='block rounded-lg shadow-lg'>
<div className='relative overflow-hidden bg-no-repeat bg-cover'>
<div className='relative'>
<img className=' w-full h-72  rounded-t-lg rounded-2xl  ' src={Webdesign23} />
<Link to="/machine">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
 </Link>
 <div>
 <img className='bg-inherit  absolute bottom-0  ' src={svgimg} />
 </div>
</div>
 <div class="px-6  ">
            <h5 class="text-lg text-[#0e5ba6] font-bold mb-4 font-display">Web Design</h5>
            <p class="text-[#072644] mb-4">We design and build websites that are visually appealing, easy to use, and optimized for search engines. We also offer ongoing maintenance and support to ensure that your website stays up to date and running smoothly.</p>
            </div>
</div>
</div>

</div>
<div className='mb-6 lg:mb-0'>
<div className='block rounded-lg shadow-lg'>
<div className='relative overflow-hidden bg-no-repeat bg-cover'>

 <div className='relative'>
<img className=' w-full h-72  rounded-t-lg rounded-2xl   ' src={Blockcahin} />
<Link to="/graphic">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
 </Link>
 <div>
 <img className='bg-inherit  absolute bottom-0  ' src={svgimg} />
 </div>
</div>
 <div class="px-6  ">
            <h5 class="text-lg  text-[#0e5ba6] font-bold mb-4 font-display ">Blockchain</h5>
            <p class="text-[#072644] mb-4">We provide expertise and guidance on the use of blockchain technology, including the development of smart contracts and decentralized applications (dApps).</p>
            </div>
</div>
</div>

</div>
</div>

    </div>
     </div> */}
</>

        );
    };
    
    export default Aboutus;
    