import logo from './logo.svg';
import './App.css';
import HeadNav from './components/headerNav';
import Header1 from './components/mainhaed';
import BGhead from './assests/bg.jpg';
import BGhead2 from './assests/bgg.png';
import Aboutus from './components/Aboutus';
import Blog from './components/blog'
import Footer from './components/footer';
import BG3 from './assests/bg23.jpg'
import BG4 from './assests/background.png'

function App() {
  return (
    <div className="App">
    
   <div className='   bg-no-repeat bg-cover sm:h-[100vh] sm:w-[100wh]  h-full w-full  '  style={{ backgroundImage:`url(${BG4})` }} >
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
