import React,{useState} from 'react'
import App from './App'
import { Provider } from 'react';
import { BlogStore } from './BlogStore';
const Main = () => {
const test = '';
const [blogsData,setblogsData]= useState(
  [
  {blogDetail:'Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam'},
  {blogDetail:'Ut ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam'},
  {blogDetail:'Ut dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam'},
  {blogDetail:'Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam'},
  {blogDetail:'Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam'}
]);
const dispatcchUserEvents =(actionType,payload)=>{
  switch (actionType) {
    case 'Add-Blog':
        console.log(payload.data);
      setblogsData([...blogsData,payload.data]);
      break;
  
    default:
      break;
  }
}
  return (
    <BlogStore.Provider value={{test,blogsData,dispatcchUserEvents}}>
    <App/>
    </BlogStore.Provider>
  )
}

export default Main