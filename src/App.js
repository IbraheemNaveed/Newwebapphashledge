import logo from './logo.svg';
import './App.css';
import BGhead from './assests/bg.jpg';
import Aboutus from './components/Aboutus';
import Blogmain from './components/BlogMain'
import Footer from './components/footer';
import Mainpage1 from './components/Mainpage';
import Webdev from './components/services/Webde';
import MachineL from './components/services/MachineL';
import Blockcahim from './components/services/Blockcahim';
import Blog1 from './components/Blogs/Blog1';
import Error from './components/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GraphicD from './components/services/GraphicD';
import HeaderNav from './components/Headernavb';
import { Children } from 'react';
import Login from './components/Login';
import PostBlog from './components/PostBlog';
import Transfermation from './components/Transfermation';
import { Contactus } from './components/Contactus';
import Submit from './components/Submit';

function App() {
  return (
  
         <>

         <div className='bg-[#ffffff] w-screen'>
         <BrowserRouter>
    <Routes>
      <Route path='/'  element= {<HeaderNav/>}>
      <Route index element={<Mainpage1/>}/>
      <Route path='about' element={<Aboutus/>}/>
      <Route path='contactus' element={<Contactus/>} />
      <Route path='blog' element={<Blogmain/>} />
      <Route path='footer' element={<Footer/>}  /></Route>
      <Route path='*' element={<Error/>}/>
      <Route path='webdev' element={<Webdev/>} />
      <Route path='blockchain' element={<Blockcahim/>} />
      <Route path='machine' element={<MachineL/>} />
      <Route path='graphic' element={<GraphicD/>} />
      <Route path='/home/blog/:id' element={<Blog1/>}/>
      {/* <Route path='blog2' element={<Blog2/>}/>
      <Route path='blog3' element={<Blog3/>}/>
      <Route path='blog4' element={<Blog4/>}/> */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/newBlog' element={<PostBlog/>}/>
      <Route path='/Submit' element={<Submit/>}  />
      <Route path='/transfermation' element={<Transfermation/>}  />
    </Routes>
    </BrowserRouter>
         </div>
         </>

      
     );

    
  
}

export default App;