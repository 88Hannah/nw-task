import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import CardGrid from './components/CardGrid';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Filters />
      <CardGrid />
      <Modal />
      <Footer />
    </>
  );
};

export default App;
