import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/FeaturedProducts/ProductCard.jsx'; // Path correct-a irukka nu check pannikonga
import './OfferProducts.css';

const OfferProducts = () => {
  const navigate = useNavigate();

  // Total 30 Different Products
  const offerProducts = [
    { id: 201, name: "Premium Basmati Rice 5kg", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300", mrp: 299, price: 199, discount: "33% OFF" },
    { id: 202, name: "Fresh Toned Milk 1L", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300", mrp: 65, price: 55, discount: "15% OFF" },
    { id: 203, name: "Pure Sunflower Oil 1L", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300", mrp: 165, price: 125, discount: "24% OFF" },
    { id: 204, name: "Crispy Biscuits 400g", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300", mrp: 80, price: 60, discount: "25% OFF" },
    { id: 205, name: "Washing Detergent 2kg", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=300", mrp: 240, price: 182, discount: "24% OFF" },
    { id: 206, name: "Mint Toothpaste 200g", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300", mrp: 95, price: 72, discount: "24% OFF" },
    { id: 207, name: "Aashirvaad Atta 5kg", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300", mrp: 260, price: 220, discount: "15% OFF" },
    { id: 208, name: "Tata Salt 1kg", image: "https://www.bbassets.com/media/uploads/p/l/241600_9-tata-salt-iodized.jpg", mrp: 28, price: 25, discount: "10% OFF" },
    { id: 209, name: "Red Label Tea 500g", image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=300", mrp: 250, price: 210, discount: "16% OFF" },
    { id: 210, name: "Maggi Noodles 400g", image: "https://www.bbassets.com/media/uploads/p/l/20005893_3-maggi-noodles-masala.jpg", mrp: 96, price: 85, discount: "11% OFF" },
    { id: 211, name: "Fresh Tomato 1kg", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300", mrp: 40, price: 25, discount: "37% OFF" },
    { id: 212, name: "Onion 1kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEYSC3BW4JJqWrpVWxIK6t-n2VGISzo0XjW-9rUsimw&s", mrp: 45, price: 30, discount: "33% OFF" },
    { id: 213, name: "Kashmir Apple 1kg", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300", mrp: 180, price: 140, discount: "22% OFF" },
    { id: 214, name: "Robusta Banana 1kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25H0p0rieVJW6aubBUy3wf_qp6ShsA8OlQXiVGItezA&s", mrp: 60, price: 45, discount: "25% OFF" },
    { id: 215, name: "Coca-Cola Can 330ml", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300", mrp: 40, price: 35, discount: "12% OFF" },
    { id: 216, name: "Amul Paneer 200g", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300", mrp: 90, price: 82, discount: "8% OFF" },
    { id: 217, name: "Lay’s Potato Chips", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300", mrp: 20, price: 18, discount: "10% OFF" },
    { id: 218, name: "Quaker Oats 1kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYRcYcN1l__PigB9yNOk_mkF_LsJh-q1tIdPbey13GA&s", mrp: 199, price: 160, discount: "19% OFF" },
    { id: 219, name: "Dove Soap 3-Pack", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300", mrp: 150, price: 130, discount: "13% OFF" },
    { id: 220, name: "Sunsilk Shampoo 340ml", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300", mrp: 180, price: 155, discount: "14% OFF" },
    { id: 221, name: "Toor Dal 1kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCnsZrWVXUNRbBwvBrJyw0pb7GFv52jI8t987ImOIBw&s", mrp: 160, price: 135, discount: "15% OFF" },
    { id: 222, name: "Urad Dal 500g", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkn12PRfQmyqKdVIodBt4U61Hc2LrGcb-IuHyg1OpTdognzsYz2fK5nANr&s=10", mrp: 85, price: 70, discount: "17% OFF" },
    { id: 223, name: "Whole Wheat Bread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300", mrp: 45, price: 38, discount: "15% OFF" },
    { id: 224, name: "Butter Croissant", image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300", mrp: 60, price: 50, discount: "16% OFF" },
    { id: 225, name: "Surf Excel Liquid 1L", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKlULEHCQ8IX5GHE0XITwMxgh2OKSF-eYytrgVS40mWg&s=10", mrp: 220, price: 195, discount: "11% OFF" },
    { id: 226, name: "Vim Dishwash Gel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyLEGdZ-LlnDYpVKBkMNxS_7NDPBw3lotcatUlre_Ezw&s", mrp: 110, price: 95, discount: "13% OFF" },
    { id: 227, name: "Pedigree Dog Food 3kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROV-DpwJ-hPAX4N7zW0_h_QuAmt3SSw7f1UK2F5kPnPw&s=10", mrp: 700, price: 620, discount: "11% OFF" },
    { id: 228, name: "Whiskas Cat Food", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-1Gm-VG-q31veMZozAq6b4YOmSGZ15-6ltc8UL7Elw&s=10", mrp: 450, price: 390, discount: "13% OFF" },
    { id: 229, name: "Fresh Chicken 1kg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQDYVvOR22e4si5_CLv9JvCMrN5SE1piedJYoCN3JMhcD8D6A16bURQxI&s=10", mrp: 280, price: 240, discount: "14% OFF" },
    { id: 230, name: "Mutton Premium 500g", image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=300", mrp: 450, price: 410, discount: "8% OFF" }
  ];

  return (
    <div className="offer-page-wrapper">
      <div className="offer-header">
        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1 className="offer-title">Offer Products</h1>
      </div>
      
      <div className="offer-grid">
        {offerProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OfferProducts;