import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaLeaf, FaCarrot, FaAppleAlt, FaChevronRight } from "react-icons/fa";
import './CategoryProducts.css';

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { addToCart, decreaseQuantity, getQuantity } = useCart();

  // 9 Categories x 3 Products = Total 27 Products
  const allProducts = [
    // 1. Vegetables
    { id: 1, name: 'Fresh Tomato', category: 'Vegetables', subCategory: 'Daily Veggies', price: 25, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'Onion (1kg)', category: 'Vegetables', subCategory: 'Root', price: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fT7vDqjYfzwihWbG651QEBGwkTT0WcfSpvm0fziFDA&s=10' },
    { id: 3, name: 'Green Capsicum', category: 'Vegetables', subCategory: 'Daily Veggies', price: 40, image: 'https://www.bbassets.com/media/uploads/p/l/40184956_2-fresho-capsicum-green.jpg' },

    // 2. Fruits
    { id: 4, name: 'Kashmir Apple', category: 'Fruits', subCategory: 'Fresh Fruits', price: 120, image: 'https://www.bbassets.com/media/uploads/p/xl/1202293_4-fresho-apple-royal-gala-4-pcs-apple-kashmir-4-pcs.jpg' },
    { id: 5, name: 'Robusta Banana', category: 'Fruits', subCategory: 'Daily Fruits', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRE6xcAUPYfD55kYj218zG6DNop701MvAjUnzU4k1jg&s=10' },
    { id: 6, name: 'Nagpur Orange', category: 'Fruits', subCategory: 'Citrus', price: 80, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThAsbxABPcIJXx1pIqZojnD5M126Mn2OuZT0QmkAEtiki_Gi5zEtoUy4k&s=10' },

    // 3. Dairy
    { id: 7, name: 'Aavin Fresh Milk 1L', category: 'Dairy', subCategory: 'Milk', price: 55, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80' },
    { id: 8, name: 'Amul Paneer 200g', category: 'Dairy', subCategory: 'Cheese & Paneer', price: 115, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80' },
    { id: 9, name: 'Mother Dairy Butter', category: 'Dairy', subCategory: 'Butter', price: 70, image: 'https://www.bbassets.com/media/uploads/p/l/30007663_4-mother-dairy-butter.jpg' },

    // 4. Snacks
    { id: 10, name: 'Lay’s Potato Chips', category: 'Snacks', subCategory: 'Chips', price: 45, image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=300&q=80' },
    { id: 11, name: 'Haldiram’s Bhujia', category: 'Snacks', subCategory: 'Namkeen', price: 80, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxxHEeC9ogtqxBcuNU87w6YIFgr0IMZzodJTsNs1pOg&s=10' },
    { id: 12, name: 'Quaker Oats Bars', category: 'Snacks', subCategory: 'Healthy Snacks', price: 120, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQj7fWqtSDsNNGqgKCW3aY1kNyrvMKMG_CwrPGSEfkkg&s=10' },

    // 5. Beverages
    { id: 13, name: 'Coca-Cola Can 330ml', category: 'Beverages', subCategory: 'Soft Drinks', price: 50, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80' },
    { id: 14, name: 'Tropicana Juice', category: 'Beverages', subCategory: 'Juices', price: 89, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9ktn7NLxSBbBSl2h7ByukfhKmmHIce9GQNls3p5C-Q&s=10' },
    { id: 15, name: 'Alo Frut Anaar Aloevera Chunks & Juice 150ml (Pack of 60)', category: 'Beverages', subCategory: 'Water', price: 25, image: 'https://axiomayurveda.com/cdn/shop/files/Alo_Frut_Anaar_juice_150ml_Front.jpg?v=1758276977' },

    // 6. Rice & Grains
    { id: 16, name: 'Daawat Basmati Rice', category: 'Rice & Grains', subCategory: 'Rice', price: 345, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw8EemHa-SA6Ei6zhJuSuBWryVachX18nMxvDjemM0yg&s=10' },
    { id: 17, name: 'Aashirvaad Atta 5kg', category: 'Rice & Grains', subCategory: 'Flours', price: 260, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUse0DEkDlT5K_mwwQ2E3SKGrXMUV_5-dkTHc18LSQXw&s=10' },
    { id: 18, name: 'Toor Dal 1kg', category: 'Rice & Grains', subCategory: 'Dals', price: 160, image: 'https://www.bbassets.com/media/uploads/p/l/10000428_17-bb-popular-toorarhar-dal.jpg' },

    // 7. Personal Care
    { id: 19, name: 'Dove Soap 3-Pack', category: 'Personal Care', subCategory: 'Bath & Body', price: 145, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZXwp67ueAqMLk3uhQnJiMjEPEx6Dd_F9l2jl3cal2w&s=10' },
    { id: 20, name: 'Sunsilk Shampoo', category: 'Personal Care', subCategory: 'Hair Care', price: 180, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80' },
    { id: 21, name: 'Colgate Toothpaste', category: 'Personal Care', subCategory: 'Oral Care', price: 95, image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=300&q=80' },

    // 8. Household
    { id: 22, name: 'Surf Excel Matic Liquid 1L', category: 'Household', subCategory: 'Detergents', price: 210, image: 'https://www.bbassets.com/media/uploads/p/l/40077762_15-surf-excel-matic-liquid-front-load.jpg' },
    { id: 23, name: 'Lizol Floor Cleaner 975ml', category: 'Household', subCategory: 'Floor Cleaners', price: 189, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrcwhoZyNRfBg0C0BwXrACvF89DKt8bfCHAPqnC73_Q&s=10' },
    { id: 24, name: 'Vim Dishwash Gel 500ml', category: 'Household', subCategory: 'Dishwash', price: 95, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YioW-9A4D_bjyn_7cFkl3aPJwg8x1hu-F5jR1xz7fQ&s=10' },

    // 9. Pet Food
    { id: 25, name: 'Pedigree Adult Dog Food 3kg', category: 'Pet Food', subCategory: 'Dog Food', price: 650, image: 'https://www.bbassets.com/media/uploads/p/l/30005107_25-pedigree-dry-dog-food-chicken-vegetables-for-adult-dogs.jpg' },
    { id: 26, name: 'Whiskas Adult Cat Food 1.2kg', category: 'Pet Food', subCategory: 'Cat Food', price: 420, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbO9OK8MMJSbmyXnb3TTxg4yuvtePW4vck1FJL-7i2HQ&s' },
    { id: 27, name: 'Drools Puppy Food 3kg', category: 'Pet Food', subCategory: 'Dog Food', price: 599, image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=300&q=80' },
    
    // 10. Outdoors & Toys
    { id: 28, name: 'Cricket Bat Set', category: 'Outdoors & Toys', subCategory: 'Sports Toys', price: 799, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbKukdPFXPVF6X1_G8po88oU1uQIAuinkRJ8YazNMYg&s=10' },
    { id: 29, name: 'Remote Control Car', category: 'Outdoors & Toys', subCategory: 'Remote Toys', price: 999, image: 'https://m.media-amazon.com/images/I/5121zV6HCpL._AC_UF1000,1000_QL80_.jpg' },
    { id: 30, name: 'Football Size 5', category: 'Outdoors & Toys', subCategory: 'Outdoor Games', price: 499, image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=300&q=80' },

    // 11. Baby Care
    { id: 31, name: 'Johnson Baby Powder', category: 'Baby Care', subCategory: 'Baby Hygiene', price: 180, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMql0WYqLMljWzMM_U2FqYoLTRB8z2_4JPLdeecvPhQ&s=10' },
    { id: 32, name: 'Pampers Diapers Pack', category: 'Baby Care', subCategory: 'Diapers', price: 599, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_8YzMYVGHUU-GJaWvkmTQFipljzGJrtiQio5K1IKWw&s=10' },
    { id: 33, name: 'Baby Feeding Bottle', category: 'Baby Care', subCategory: 'Feeding', price: 249, image: 'https://breeze-media.vega.co.in/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/s/t/steel_feeding_bottle_wide_neck-01_2.webp' },

    // 12. Plastic Goods
    { id: 34, name: 'Plastic Bucket 20L', category: 'Plastic Goods', subCategory: 'Buckets', price: 220, image: 'https://www.bbassets.com/media/uploads/p/l/40172183_11-bb-home-popular-plastic-strip-bucket-pink.jpg' },
    { id: 35, name: 'Storage Container Set', category: 'Plastic Goods', subCategory: 'Storage', price: 349, image: 'https://www.milton.in/cdn/shop/files/81rjJUNXfTL._SL1500.jpg?v=1754389590' },
    { id: 36, name: 'Plastic Chair', category: 'Plastic Goods', subCategory: 'Furniture', price: 699, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88gTGHeTzT_XDJN15jyIo42dOl9rsshTeQkjAh39lhuMDoXajEjIDOt3T&s=10' },

    // 13. Pulses & Cereals
    { id: 37, name: 'Urad Dal 1kg', category: 'Pulses & Cereals', subCategory: 'Pulses', price: 145, image: 'https://www.tenalidoublehorse.com/cdn/shop/files/Premium-Urad-Dall-1kg.png?v=1748516600&width=1445' },
    { id: 38, name: 'Moong Dal 1kg', category: 'Pulses & Cereals', subCategory: 'Pulses', price: 155, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIMP1NkZ95_iLrhTaF805RDAF0LMcvBEZZ7xfiYykpzPqDHZyU9YOBl4&s=10' },
    { id: 39, name: 'Ragi Flour 1kg', category: 'Pulses & Cereals', subCategory: 'Cereals', price: 95, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXu1MBP0lPZk2n26C5orTssjPJI1qqrzMMZcPKrm6nFw&s=10' },

    // 14. Birthday Celebration Products
    { id: 40, name: 'Birthday Balloon Set', category: 'Birthday Celebration Products', subCategory: 'Decorations', price: 199, image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=300&q=80' },
    { id: 41, name: 'Birthday Candles Pack', category: 'Birthday Celebration Products', subCategory: 'Party Supplies', price: 49, image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=300&q=80' },
    { id: 42, name: 'Party Popper Set', category: 'Birthday Celebration Products', subCategory: 'Party Supplies', price: 149, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71dtCWiZL9Xp-Fw4HbG0JJvbHwwbHD_MRu6_KwfU0bg&s' }

];

  // Modified filter logic to handle names with multiple words/symbols like "Rice & Grains" safely
  const filteredProducts = allProducts.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase().replace(/-/g, ' ')
  );

  const subCategories = [...new Set(filteredProducts.map(p => p.subCategory))];
  const categoryIcons = {
  "Daily Veggies": <FaLeaf />,
  "Root": <FaCarrot />,
  "Fresh Fruits": <FaAppleAlt />,
  "Daily Fruits": <FaAppleAlt />,
  "Citrus": <FaAppleAlt />,
};
  return (
    
      
      
      <div className="cat-main-layout">
        <aside className="cat-sidebar">
          <button className="back-bts" onClick={() => navigate(-1)}>
          ← Back
        </button>
          
          <h3>Categories</h3>
          {subCategories.map(sub => (
  <div key={sub} className="sidebar-item modern-sidebar-item">
    
    <div className="sidebar-icon">
      {categoryIcons[sub] || <FaLeaf />}
    </div>

    <div className="sidebar-content">
      <h4>{sub}</h4>
      <p>Fresh & Quality Products</p>
    </div>

    

  </div>
))}
        </aside>

        <main className="cat-product-grid">
          {filteredProducts.map(p => (
            <div className="product-card" key={p.id}>
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <div className="price-row">
                <span>₹{p.price}</span>
                
                {getQuantity(p.id) > 0 ? (
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(p.id)}>-</button>
                    <span>{getQuantity(p.id)}</span>
                    <button onClick={() => addToCart(p)}>+</button>
                  </div>
                ) : (
                  <button className="add-btn" onClick={() => addToCart(p)}>Add</button>
                )}

              </div>
            </div>
          ))}
        </main>
      </div>
    
  );
};

export default CategoryProducts;