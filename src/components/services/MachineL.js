import React from 'react'
import svgimg from '..//../assests/imgg.svg'
import Webdesign23 from '..//../assests/webdesign2.png';
function MachineL() {
  return (
    <div>

<div className='block rounded-lg shadow-lg'>
<div className='relative overflow-hidden bg-no-repeat bg-cover'>
<div className='relative'>
<img className=' w-full h-72  rounded-t-lg rounded-2xl  ' src={Webdesign23} />

              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>

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
  )
}

export default MachineL