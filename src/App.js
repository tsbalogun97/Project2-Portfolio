import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import MyInfoPage from './pages/MyInfoPage';
import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import InfoPageNav from './pages/InfoPageNav';
import Technology from './pages/Technology';




function App() {
  return (
    <div className="App">
      <InfoPageNav/>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/aboutme' element={<AboutMe/>}/>
      <Route path='/contact' element={<ContactInfo/>}/>
      <Route path='/technology' element={<Technology/>}/>
      <Route path='/info' element={<MyInfoPage/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
        

        



