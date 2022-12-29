import React, { useState } from "react";
import { Link } from "react-router-dom";
const mainhead = () => {
    return (
   <>
    <section className='flex flex-col items-center sm:flex-row  px-4 mx-auto max-w-screen-xl     '>
      <div>
        
<div class=" px-4 py-8 md:px-4 text-center md:text-left mt-8 md:w-3/2 w-full">
    <a href="#">
        <h5 class="mb-6  text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-red-800">IT Consultancy That Puts The End-User At The Heart Of The Process</h5>
    </a>
    <p class="mb-6 font-normal text-xl sm:text-2xl text-gray-700 dark:text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        
        
    </a> */}
    <div className=' border-l-4 border-red-600 flex  px-6 mb-3'>
           <p className='text-red-600 font-semibold hover:text-black  '> See how can we help you</p>
          <div className="mt-2" >
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="#FF0000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          
          </div>
           </div>
</div>

      </div>
      {/* <div className='bg-gray-200 opacity-90  text-left block rounded-lg shadow-lg   pt-12 md:w-4/3  w-full '>
      <form class="w-full max-w-lg px-4 ">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold " for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class=" px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold " for="grid-email">
        Email
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-number" type="email" placeholder="info@hashledge.co.uk"/>
      <p class="text-red-500 text-xs italic mb-3">Please fill out this field.</p>
    </div>
    <div class="w px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
        Phone Number
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-number" type="number" placeholder="+447975777666"/>
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
    
  </div>
  <div class="flex flex-col items-center justify-between gap-6">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Request a call back
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Need Help?
      </a>
    </div>
    <div className=' border-l-4 border-red-600 flex px-6 mb-3'>
           <p className='text-red-600 font-semibold hover:text-black  '> Request a call back</p>
           </div>
  

</form>
      </div> */}
    </section>
   </>
        );
    };
    
    export default mainhead;
    