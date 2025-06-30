import React from 'react';
import './App.css'; // We will write our styles here

// Import all the components we just created
import Header from './header';
import PromoBar from './promobar';
import Hero from './hero';
import Featured from './featured';
import Footer from './footer';

function App() {
  return (
    <div className="app">
      <Header />
      <PromoBar />
      <main className="main-content">
        <Hero />
        <Featured />
      </main>
      <Footer />
    </div>
  );
}

export default App;