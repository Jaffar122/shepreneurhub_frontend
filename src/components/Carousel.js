import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import artisansImage from './images/artisans.jpg';
import offersImage from './images/offers.jpg';

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Use 'auto' to show scrollbar when content exceeds container width */
  gap: 10px;
  padding: 10px;
  width: 100%; /* Adjust width as needed */
  max-width: 800px; /* Limit the maximum width */
  margin: 0 auto;
`;

const Card = styled.div`
  flex: 0 0 auto; /* Prevents cards from growing or shrinking */
  width: 200px; /* Set the width of each card */
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Carousel = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <CarouselContainer>
      <Card onClick={() => navigateTo('/interior-designers')}>
        <Image src={offersImage} alt="Offers" />
        <div>
          <h3>Interior Designers</h3>
          <p>Get the best quotes for interior designers.</p>
        </div>
      </Card>
      <Card onClick={() => navigateTo('/offers')}>
        <Image src={offersImage} alt="Offers" />
        <div>
          <h3>Offers</h3>
          <p>Explore our latest offers and promotions.</p>
        </div>
      </Card>
      <Card onClick={() => navigateTo('/artisan-stories')}>
        <Image src={artisansImage} alt="Artisan Stories" />
        <div>
          <h3>Artisan Stories</h3>
          <p>Discover the stories behind our handmade products.</p>
        </div>
      </Card>
      <Card onClick={() => navigateTo('/offers')}>
        <Image src={offersImage} alt="Offers" />
        <div>
          <h3>Offers</h3>
          <p>Explore our latest offers and promotions.</p>
        </div>
      </Card>
    </CarouselContainer>
  );
};

export default Carousel;
