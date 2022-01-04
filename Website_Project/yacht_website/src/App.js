import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Overview from './pages/Overview'
import InlandYachts from './pages/InlandYachts';
import SeaYachts from './pages/SeaYachts';
import About from './pages/About'
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/przeglad-jachtow' element={<Overview />}/>
          <Route path='/kontakt' element={<About />}/>
          <Route path='/przeglad-jachtow/srodladowe' element={<InlandYachts/>} />
          <Route path='/przeglad-jachtow/morskie' element={<SeaYachts/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
