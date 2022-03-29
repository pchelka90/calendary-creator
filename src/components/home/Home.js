import { GoogleApiWrapper } from 'google-maps-react';
import React, { lazy, Suspense } from 'react';
import Spinner from '../utilities/Spinner';

const Navbar = lazy(() => import('./Navbar'));
const Hero = lazy(() => import('./Hero'));
const Kreator = lazy(() => import('./Kreator'));
const Form = lazy(() => import('./Form'));
const Przyklad = lazy(() => import('./Przyklad'));
const Services = lazy(() => import('./Services'));
const Services2 = lazy(() => import('./Services2'));
const ContactPageTemplate = lazy(() => import('./ContactPageTemplate'));
const Footer = lazy(() => import('./Footer'));

const Home = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Navbar />
      <Hero />
      <Kreator />
      <Form />
      <Przyklad />
      <Services />
      <Services2 />
      <ContactPageTemplate />
      <GoogleApiWrapper />
      <Footer />
    </Suspense>
  );
};

export default Home;
