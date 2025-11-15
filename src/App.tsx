import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Main Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Book from './pages/Book';
import Reviews from './pages/Reviews';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import FAQ from './pages/FAQ';

// Service Subpages
import RegularCleaning from './pages/services/RegularCleaning';
import EndOfLease from './pages/services/EndOfLease';
import SpringCleaning from './pages/services/SpringCleaning';
import CustomCleaning from './pages/services/CustomCleaning';
import CarpetCleaning from './pages/services/CarpetCleaning';
import UpholsteryCleaning from './pages/services/UpholsteryCleaning';
import OvenCleaning from './pages/services/OvenCleaning';
import BBQCleaning from './pages/services/BBQCleaning';
import StairCaseCleaning from './pages/services/StairCaseCleaning';
import CommercialSpacesCleaning from './pages/services/CommercialSpacesCleaning';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/regular-cleaning" element={<RegularCleaning />} />
          <Route path="/services/end-of-lease" element={<EndOfLease />} />
          <Route path="/services/spring-cleaning" element={<SpringCleaning />} />
          <Route path="/services/custom-cleaning" element={<CustomCleaning />} />
          <Route path="/services/carpet-cleaning" element={<CarpetCleaning />} />
          <Route path="/services/upholstery-cleaning" element={<UpholsteryCleaning />} />
          <Route path="/services/oven-cleaning" element={<OvenCleaning />} />
          <Route path="/services/bbq-cleaning" element={<BBQCleaning />} />
          <Route path="/services/staircase-cleaning" element={<StairCaseCleaning />} />
          <Route path="/services/commercial-cleaning" element={<CommercialSpacesCleaning />} />



          <Route path="/book" element={<Book />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;