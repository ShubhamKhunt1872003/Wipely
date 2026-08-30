import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postalCodes from '../data/postalcode.json';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import ServicesSection from '../components/home/ServicesSection';
import BeforeAfter from '../components/home/BeforeAfter';
import WhyWipelyHowItWorks from '../components/home/WhyWipelyHowItWorks';
import GoogleReviews from '../components/home/GoogleReviews';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';

const Home: React.FC = () => {
  const [postalCode, setPostalCode] = useState('');
  const [availabilityMessage, setAvailabilityMessage] = useState('');
  const navigate = useNavigate();

  const handleAvailabilityCheck = (e: React.FormEvent) => {
    e.preventDefault();

    if (postalCodes.includes(postalCode)) {
      setAvailabilityMessage("Great news! Wipely services your area. Let's get you booked!");
      setTimeout(() => {
        navigate('/services');
      }, 1500);
    } else {
      setAvailabilityMessage("Sorry, Wipely isn't available in your area yet! We're expanding soon.");
    }
  };

  return (
    <div>
      <Hero
        postalCode={postalCode}
        onPostalCodeChange={setPostalCode}
        onSubmit={handleAvailabilityCheck}
        availabilityMessage={availabilityMessage}
      />
      <TrustBar />
      <ServicesSection />
      <BeforeAfter />
      <WhyWipelyHowItWorks />
      <GoogleReviews />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Home;
