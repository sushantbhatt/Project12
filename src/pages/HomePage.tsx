import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Reviews from '../components/Reviews';
import CoreValuesPreview from '../components/CoreValuesPreview';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Products />
      <Reviews />
     
    </main>
  );
};

export default HomePage;