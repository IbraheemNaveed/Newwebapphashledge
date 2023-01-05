import logo from './logo.svg';
import './App.css';
import BGhead from './assests/bg.jpg';
import Aboutus from './components/Aboutus';
import Blog from './components/Blog'
import Footer from './components/footer';
import Mainpage1 from './components/Mainpage';
import Webdev from './components/services/Webdev';
import MachineL from './components/services/MachineL';
import Blockcahim from './components/services/Blockcahim';
import Blog1 from './components/Blogs/Blog1';
import Error from './components/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GraphicD from './components/services/GraphicD';
import HeaderNav from './components/Headernavb';
import Contactus1 from './components/Contactus';
import { Children } from 'react';
import Login from './components/Login';
import PostBlog from './components/PostBlog';

function App() {
  return (
  
         <>

         <div className='bg-[#fcfae5]'>
         <BrowserRouter>
    <Routes>
      <Route path='/'  element= {<HeaderNav/>}>
      <Route index element={<Mainpage1/>}/>
      <Route path='about' element={<Aboutus/>}/>
      <Route path='contactus' element={<Contactus1/>} />
      <Route path='blog' element={<Blog/>} />
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
    </Routes>
    </BrowserRouter>
         </div>
         </>

      
     );

    
  
}

export default App;