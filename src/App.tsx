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