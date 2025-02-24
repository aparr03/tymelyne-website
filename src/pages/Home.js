import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from '../components/Home/AppAppBar';
import Hero from '../components/Home/Hero';
import LogoCollection from '../components/Home/LogoCollection';
import Highlights from '../components/Home/Highlights';
import Pricing from '../components/Home/Pricing';
import Features from '../components/Home/Features';
import Testimonials from '../components/Home/Testimonials';
import FAQ from '../components/Home/FAQ';
import Footer from '../components/Home/Footer';

export default function App(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}