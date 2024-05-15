import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import AboutMe from './pages/AboutMe';
// import Contact from './pages/Contact'; // Import Contact component if it exists
// import Resume from './pages/Resume'; // Import Resume component if it exists
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/AboutMe' element={<AboutMe />} /> 
      </Routes>
      <Footer /> {/* Render Footer component outside of Routes */}
    </Router>
  );
}

export default App;
