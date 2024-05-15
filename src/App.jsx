import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact'; 
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Portfolio' element={<Portfolio/>} />
        <Route path='/Resume' element={<Resume/>} />  
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
