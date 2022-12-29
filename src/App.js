import logo from './logo.svg';
import './App.css';
import HeadNav from './components/headerNav';
import Header1 from './components/mainhaed';
import BGhead from './assests/bg.jpg';
import Aboutus from './components/Aboutus';
import Blog from './components/blog'
import Footer from './components/footer';
import BG3 from './assests/bg23.jpg'
import BG4 from './assests/background.png'
import Mainpage1 from './components/Mainpage';

function App() {
  return (
    <div className="App">


   <Mainpage1/>
   <Aboutus/>
   <Blog/>
   <Footer/>
    </div>
  );
}

export default App;