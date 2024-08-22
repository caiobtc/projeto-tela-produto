import React from 'react';
import styled from 'styled-components';
import card from './Card';

const productsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
`;

const products = ({ products }) => (
    <productsContainer>{products.map(product => (
        <card
            key={product.id}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
        />
))}</productsContainer>
);

export default products;