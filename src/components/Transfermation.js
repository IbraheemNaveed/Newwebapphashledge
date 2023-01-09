import React from 'react'
import img1 from '../assests/rapidinnovation-bold.svg'
import img2 from '../assests/starimg.svg'
import img3 from '../assests/evolve-bold.svg'
function Transfermation() {
  return (
    
    <>
    <head>
   <link rel="preconnect" href="https://fonts.googleapis.com"/>
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
   <link href="https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap" rel="stylesheet"/>
</head>
        <div className=' grid grid-cols-2 gap-8 relative font-display  '>
      
      
      <div className='m-3'>
      <h className="  sticky top-28  font-bold text-[#072644] text-2xl sm:text-6xl  " >   Guiding your technical transformation</h>
      </div>
         
          <div className=' flex flex-col gap-8  '>
          <div className='flex flex-col gap-6'>
    <div>
        <img className='animate-spin' src={img1} />
    </div>
    <div >
        <h className=" font-bold text-[#072644] text-xl " >
        Analysing where you are now
        </h>
        <p className=' text-sm sm:text-base'>
        We analyse your business needs and consumer behaviour through a discovery process taking into account your digital maturity, size and skills to define a technical strategy aligned to your business.
        </p>
    </div>
          </div>
          <div className='flex flex-col gap-6'>
    <div>
        <img className='animate-pulse' src={img2} />
    </div>
    <div>
        <h className="font-bold text-[#072644] text-xl" >
        Guiding your digital journey
        </h>
        <p className=' text-sm sm:text-base'>
        Keeping your customer at the centre, we design and build a technical framework to enable future innovations as consumer demands evolve.
           </p>
    </div>
          </div>
          <div className='flex flex-col gap-6'>
    <div>
        <img className='animate-spin' src={img3} />
    </div>
    <div>
        <h className="font-bold text-[#072644] text-xl">
        Developing a roadmap for your success
        </h>
        <p className=' text-sm sm:text-base'>
        Our expert technical team can enable you to automate and scale your future digital capabilities for the delivery of services, products or experiences to consumers, at speed.
           </p>
    </div>
          </div>
    
          </div>
    
        </div>
    </>
  )
}

export default Transfermation
