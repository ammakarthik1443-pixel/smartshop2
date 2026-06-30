import React from 'react';
import './Home.css';

// --- Importing All Components ---
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Features from '../../components/Features/Features';
import Categories from '../../components/Categories/Categories';
import TodayDeals from '../../components/DealOfDay/DealOfDay';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import OrderProcess from '../../components/OrderProcess/OrderProcess';
import Reviews from '../../components/Reviews/Reviews';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home-page">
      {/* Top Banner */}
      <HeroBanner />

      {/* Feature Highlights (Fast Delivery, Best Prices, etc.) */}
      <Features />

      {/* Circle Categories with Scroll */}
      <Categories />

      {/* Yellow Offer Banner with Timer */}
      <TodayDeals />

      {/* Product Grid Layout */}
      <FeaturedProducts />

      {/* How It Works (Order Process Steps) */}
      <OrderProcess />

      {/* Customer Reviews with Real Images */}
      <Reviews />

      {/* Blue Footer Section (Without WhatsApp) */}
      <Footer />
      
    </div>
  );
};

export default Home;