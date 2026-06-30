import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CategoryProducts.css';

const CategoryProducts = () => {
  const { categoryName } = useParams();
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
    { id: 16, name: 'Daawat Basmati Rice', category: 'Rice & Grains', subCategory: 'Rice', price: 345, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80' },
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
    { id: 27, name: 'Drools Puppy Food 3kg', category: 'Pet Food', subCategory: 'Dog Food', price: 599, image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=300&q=80' }
  ];

  // Modified filter logic to handle names with multiple words/symbols like "Rice & Grains" safely
  const filteredProducts = allProducts.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase().replace(/-/g, ' ')
  );

  const subCategories = [...new Set(filteredProducts.map(p => p.subCategory))];

  return (
    

      <div className="cat-main-layout">
        <aside className="cat-sidebar">
          <h3>Categories</h3>
          {subCategories.map(sub => (
            <div key={sub} className="sidebar-item">{sub}</div>
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