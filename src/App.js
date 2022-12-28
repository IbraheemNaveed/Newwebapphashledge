import logo from './logo.svg';
import './App.css';
import HeadNav from './components/headerNav';
import Header1 from './components/mainhaed';
import BGhead from './assests/bg.jpg';
import BGhead2 from './assests/bgg.png';
import Aboutus from './components/Aboutus';
import Blog from './components/blog'
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
    
   <div className=' pb-28  bg-cover  ' style={{ backgroundImage:`url(${BGhead})` }} >
   <HeadNav/>
   <Header1/>
   </div>
   <Aboutus/>
   <Blog/>
   <Footer/>
    </div>
  );
}

export default App;
