import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import MobileStickyCTA from './home/MobileStickyCTA';
import StickyCallButton from './home/StickyCallButton';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        {children ?? <Outlet />}
      </motion.main>
      <Footer />
      <MobileStickyCTA />
      <StickyCallButton />
    </div>
  );
};

export default Layout;