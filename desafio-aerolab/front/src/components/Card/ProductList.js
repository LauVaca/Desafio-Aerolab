import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product.js';
import CircularProgress from '@material-ui/core/CircularProgress';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQwMWNiNTdlNzE4NzAwMjBlMzhmM2UiLCJpYXQiOjE2MTQ4MTQzODl9.y01QnX7nVE9j3ig0I8sujMsLriEJ7A_RV-9pJlmFnxg';

function ProductList() {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    const fectchData = async () => {
      try {
        const { data } = await axios.get(
          `https://coding-challenge-api.aerolab.co/products?token=${TOKEN}`,
        );
        setCards(data);
      } catch (err) {
        console.log(err);
      }

      console.log(cards);
    };

    fectchData();
  }, []);

  if (!cards) {
    return (
      <div className="progressBar">
        <CircularProgress color="secondary" />
      </div>
    );
  }

  return (
    <div className="cardCont">
      {cards.map((card) => {
        return (
          <Product
            url={card.img.url}
            name={card.name}
            category={card.category}
            cost={card.cost}
          />
        );
      })}
    </div>
  );
}
export default ProductList;
