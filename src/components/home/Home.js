import React, { lazy, Suspense } from 'react';
import Spinner from '../utilities/Spinner';

const Navbar = lazy(() => import('./Navbar'));
const Hero = lazy(() => import('./Hero'));
const Banner = lazy(() => import('./Banner'));
const Banner2 = lazy(() => import('./Banner2'));
const Banner3 = lazy(() => import('./Banner3'));
const Kreator = lazy(() => import('./Kreator'));
const Form = lazy(() => import('./Form'));
const Przyklady = lazy(() => import('./Przyklady'));
const Services = lazy(() => import('./Services'));
const Footer = lazy(() => import('./Footer'));

const Home = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Navbar />
      <Hero />
      <Banner />
      <Kreator />
      <Form />
      <Banner2 />
      <Przyklady />
      <Banner3 />
      <Services />
      <Footer />
    </Suspense>
  );
};

export default Home;
