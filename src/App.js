import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contactus';
import Services from './pages/services';
import SpecialOffers from './pages/specialoffers';
import Header from './components/shared/header';
import Footer from './components/shared/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      
        <Routes>
        <Route path="/" element={<AboutUs/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
         <Route path="/services" element={<Services />} />
          <Route path="/specialoffers" element={<SpecialOffers />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
