import logo from './logo.svg';
import './App.css';
import HeadNav from './components/HeaderNav';
import Header1 from './components/Mainhaed';
import BGhead from './assests/bg.jpg';
import Aboutus from './components/Aboutus';
import Blog from './components/blog'
import Footer from './components/footer';
import BG3 from './assests/bg23.jpg'
import BG4 from './assests/background.png'
import Bg24 from './assests/bg24.png'
import Mainpage1 from './components/Mainpage';
import Webdev from './components/services/Webdev';
import MachineL from './components/services/MachineL';
import Blockcahim from './components/services/Blockcahim';
import Blog1 from './components/Blogs/Blog1';
import Blog2 from './components/Blogs/Blog2';
import Blog3 from './components/Blogs/Blog3';
import Blog4 from './components/Blogs/Blog4';
import Error from './components/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GraphicD from './components/services/GraphicD';
import HeaderNav from './components/HeaderNav';
import { Children } from 'react';

function App() {
  return (
  
         <>
          <BrowserRouter>
    <Routes>
      <Route path='/'  element= {<HeaderNav/>}>
      <Route index element={<Mainpage1/>}/>
      <Route path='about' element={<Aboutus/>} />
      <Route path='blog' element={<Blog/>} />
      <Route path='footer' element={<Footer/>}  /></Route>
      <Route path='*' element={<Error/>}/>
      <Route path='webdev' element={<Webdev/>} />
      <Route path='blockchain' element={<Blockcahim/>} />
      <Route path='machine' element={<MachineL/>} />
      <Route path='graphic' element={<GraphicD/>} />
      <Route path='blog1' element={<Blog1/>}/>
      <Route path='blog2' element={<Blog2/>}/>
      <Route path='blog3' element={<Blog3/>}/>
      <Route path='blog4' element={<Blog4/>}/>
    </Routes>

    </BrowserRouter>
         </>

      
     );

    
  
}

export default App;