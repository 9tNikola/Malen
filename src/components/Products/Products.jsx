import React, { useState, useEffect } from "react";
import "./Products.css";

const productData = [
  {
    id: 1,
    image: "/images/products/product1.jpg", // Replace with actual paths
    name: "Brake pad",
    price: 59,
    rating: 5,
    sale: false,
  },
  {
    id: 2,
    image: "/images/products/product2.jpg",
    name: "Body Spring",
    price: 29,
    rating: 4.5,
    sale: false,
  },
  {
    id: 3,
    image: "images/products/product3.jpg",
    name: "Absorber Air",
    price: 99,
    rating: 5,
    sale: false,
  },
  {
    id: 4,
    image: "images/products/product4.jpg",
    name: "Absorbers Brake",
    price: 55,
    oldPrice: 69,
    rating: 5,
    sale: true,
  },
];

const InfiniteSlider = () => {
  const [cards, setCards] = useState([...productData]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClicked,setIsClicked] = useState(false)
  useEffect(()=>{
    handleNext()
  },[isTransitioning])

  // Slide to the next card
  const handleNext = () => {
    if (isClicked) return;
    setIsClicked(true);
    setTimeout(() => {
      const newCards = [...cards];
      const firstCard = newCards.shift(); // Remove the first card
      newCards.push(firstCard); // Add it to the end
      setCards(newCards);
      setIsClicked(false);
    }, 500);
     // Match the CSS transition time
  };

  // Slide to the previous card
  const handlePrevious = () => {
    if (isClicked) return;
    setIsClicked(true);

    setTimeout(() => {
      const newCards = [...cards];
      const lastCard = newCards.pop(); // Remove the last card
      newCards.unshift(lastCard); // Add it to the beginning
      setCards(newCards);
      setIsClicked(false);
    }, 500); // Match the CSS transition time
  };
  
  return (
    
    <div id="products" class="products">
      <div className="head">
        <div className="subtitle">
        <div className="red-lines start">
            <div className="upper-line"></div>
            <div className="lower-line"></div>
          </div>
          POPULAR PRODUCTS
          <div className="red-lines end">
            <div className="upper-line"></div>
            <div className="lower-line"></div>
          </div>
        </div>
      </div>
  <h2 class="products-title">Browse Our Products</h2>
  <div class="products-slider">
    <button class="control-btn left" onClick={handlePrevious}>
    <i class="fa-solid fa-chevron-left"></i>
    </button>
    <div class="slider-track">
      {cards.map((product, index) => (
        <div class="product-card" key={product.id}>
          <div class="product-image-container">
            <img
              src={product.image}
              alt={product.name}
              class={`product-image ${isClicked ? "animate" : ""}`}
            />
            {product.sale && <div class="sale-label">Sale</div>}
          </div>
          <div class={`product-details ${isClicked ? "animate" : ""}`}>
            <div className="product-rating">⭐⭐⭐⭐⭐</div>
            <h3 class={`product-name ${isClicked ? "animate" : ""}`}>
              {product.name}
            </h3>
            <div class={`product-price ${isClicked ? "animate" : ""}`}>
              ${product.price.toFixed(2)}
              {product.oldPrice && (
                <span class="old-price">${product.oldPrice.toFixed(2)}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    <button class="control-btn right" onClick={handleNext}>
      
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>
</div>

  );
};

export default InfiniteSlider;
