import * as React from 'react';
import Spinner from '../utilities/Spinner';

const Navbar = React.lazy(() => import('./Navbar'));
const Hero = React.lazy(() => import('./Hero'));
const Banner = React.lazy(() => import('./Banner'));
const Banner2 = React.lazy(() => import('./Banner2'));
const Banner3 = React.lazy(() => import('./Banner3'));
const Kreator = React.lazy(() => import('./Kreator'));
const Form = React.lazy(() => import('./Form'));
const Przyklady = React.lazy(() => import('./Przyklady'));
const Oferta = React.lazy(() => import('./Oferta'));
const Footer = React.lazy(() => import('./Footer'));
const SuccessPage = React.lazy(() => import('./SuccessPage'));

const Home = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Navbar />
      <Hero />
      <Banner />
      <Kreator />
      <Form />
      <Banner2 />
      <Przyklady />
      <Banner3 />
      <Oferta />
      <Footer />
    </React.Suspense>
  );
};

export default Home;
