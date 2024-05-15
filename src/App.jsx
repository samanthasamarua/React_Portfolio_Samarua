import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact'; 
// import Resume from './pages/Resume'; 
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Portfolio' element={<Portfolio/>} /> 
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
