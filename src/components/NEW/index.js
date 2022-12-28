import { list } from 'postcss';
import React, { useState } from 'react';
import Select from 'react-select';
import Ress from './Ress';
// import './Style.css';
function Index() {
  const chk=[ 'Apple','Mango','peach']
const List = [
    {
      // value: 1,
      label: 'Amaryllis',
      price: 100,
      detail:'Bulb flowering type plants that produce a cluster of attractive trumpet like flowers in different color variations.',
    },
    {
      // value: 1,
      label: 'African Violet',
      price: 200,
      detail:'African violet care information guide: Belonging to the Saintpaulia Genus with many species. Growing conditions, possible problems, pictures and description.',
    },
    {
      // value: 1,
      label: 'Angel Wing Begonia',
      price: 300,
      detail:'This plant is from a large genus named Begonia. The Angel Wing Begonia is one of the most popular species from the genus.',
    },
    {
      // value: 1,
      label: 'Barberton Daisy',
      price: 400,
      detail:'A flowering pot plant displaying striking flowers.',
    },
    {
      // value: 1,
      label: 'Beach Spider Lily',
      price: 5400,
      detail:'This amazing bulb based plant "beach spider lily" enjoys environments that are downright aquatic and easy to maintain.',
    },
    {
      // value: 1,
      label: 'Belladonna Lily',
      price: 5040,
      detail:'Also known as the naked lady because of the bare flower stalks that appear without leaves.',
    },
    {
      // value: 1,
      label: 'Bird Of Paradise',
      price: 5003,
      detail:'The Bird of Paradise is a delightfully easy to care for plant that enjoys warm, balmy days year round.',
    },
    {
      // value: 1,
      label: 'Blushing Bromeliad',
      price: 5001,
      detail:'An interesting species from the bromeliad family which produces a red center within the rosette of leaves.',
    },
    {
      // value: 1,
      label: 'Christmas Cactus',
      price: 5400,
      detail:'The Christmas cactus is the ideal house plant if a grower likes to see flowers blooming from November - January.',
    },
    {
      // value: 1,
      label: 'Easter Cactus',
      price: 1500,
      detail:'Tropical cactus that requires a certain amount of regular water in order to survive.',
    },
    {
      // value: 1,
      label: 'Jelly Beans',
      price: 4400,
      detail:'The Jelly beans displays small finger like succulent leaves that develop red tips.',
    },
    {
      // value: 1,
      label: 'Tiger Jaws',
      price: 9800,
      detail:'This species flowers at the end of summer and display jaw like leaves that are toothed.',
    },
    {
      // value: 1,
      label: 'Trailing Jade',
      price: 3400,
      detail:'Trailing jade is a semi-succulent suitable for hanging baskets and windowsills',
    },
  ];
  
  // const[resultt, listValue]=UseState(List[1].label);
//   const listHandler = e=>
//   {
//  listValue(e.label);
//   }
 
const [Fruit, setFruit] = useState();

    // const [count, setCount] = UseState(0);
  return (
    <> 
    <div className=' flex flex-row bg-[#171717] '>

        <div className=' border-2 border-black w-2/3  ' > 
       
        <div>   
          <div>
            
          </div>
            
        <label className=' text-center font-extrabold text-transparent text-5xl sm:text-7xl bg-clip-text bg-gradient-to-br from-[#4ADE80] to-[#6EE7B7] pt-6' for="List">Choose a Plant:</label>      
      
<Select options={List} onChange={e => setFruit(e)} />
 {/* <div> {Fruit.label} </div>       */}

{console.log(Fruit)}
{/* { <div> {Fruit} </div> } */}
      </div>
        <ul>
        {List.map((item) => (
          // onChange={listHandler}
<li onClick="active()" key={item.value}></li>
        
      ))}
    </ul>
        </div>                 
        <div className=' border-2 border-black w-1/3  ' >
       
        <Ress data={List} />


    
   
        </div>  
    </div>
    
    <div className=' text-center font-extrabold text-transparent text-5xl sm:text-7xl bg-clip-text bg-gradient-to-br from-[#4ADE80] to-[#6EE7B7] pt-6  '> <p> DETAILS OF THE PLANT:  </p> </div>
    {/* {Fruit.detail ?
    <div className=' text-2xl text-[#252222]  mt-6 px-9'>{ Fruit.detail} </div> :<></>  }
    */}
    </>
  )
}

export default Index