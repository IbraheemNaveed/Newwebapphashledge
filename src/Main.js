import React,{useState,useEffect} from 'react'
import App from './App'
import { Provider } from 'react';
import { BlogStore } from './BlogStore';
import { blogData } from './assests/Data';
const Main = () => {
const [blogsData,setblogsData]= useState();
const test = '';
const [addBlog,setaddBlog] = useState('idle');
const dispatcchUserEvents =(actionType,payload)=>{
  switch (actionType) {
    case 'Add-Blog':
      setblogsData([...blogsData,payload.data]);
      let blog = localStorage.getItem('blogs');
      let previousBlogs = JSON.parse(blog);
      previousBlogs.push(payload.data);
      localStorage.setItem('blogs',JSON.stringify(previousBlogs));
      setaddBlog("added");
      break;
    case 'Change-Blog-Status':
      setaddBlog('idle');
      break;  
    default:
      break;
  }
}
useEffect(()=>{
  if(localStorage.getItem('blogs')===null)
  {
    localStorage.setItem('blogs',JSON.stringify(blogData));
    setblogsData(blogData);
  }
  else{
    let blog = localStorage.getItem('blogs');
    let previousBlogs = JSON.parse(blog);
    setblogsData(previousBlogs);
  }
},[])
  return (
    <BlogStore.Provider value={{test,blogsData,dispatcchUserEvents,addBlog}}>
    <App/>
    </BlogStore.Provider>
  )
}

export default Main