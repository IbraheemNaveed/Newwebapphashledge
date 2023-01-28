import React from 'react'
import svgimg from '..//../assests/imgg.svg'
import Digital from '..//../assests/NewAssets/DigitalTransformation.png';
function DigitalTrans() {
  return (
    <div>
      

      <div className='block rounded-lg shadow-lg'>
<div className='relative overflow-hidden bg-no-repeat bg-cover'>
 <div className='relative'>
<img className=' w-full h-72  rounded-t-lg rounded-2xl  ' src={Digital} />
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>

 <div>
 <img className='bg-inherit  absolute bottom-0  ' src={svgimg} />
 </div>
</div>
 <div class="px-6  ">
            <h5 class="text-lg text-[#0e5ba6] font-bold mb-4 font-display ">Digital Transformation</h5>
            <p class=" mb-4 text-[#072644]">We help businesses and organizations modernize and streamline their processes and systems through the use of technology. This may involve implementing new software and platforms, integrating existing systems, or developing custom solutions.</p>
            </div>
</div>
</div>

    </div>
  )
}

export default DigitalTrans
