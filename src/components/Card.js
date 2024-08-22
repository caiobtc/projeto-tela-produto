import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const cardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px
    border: 1px solid #ddd;
    border-radius: 10px;
    margin: 10px;
    width: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const cardTitle = styled.h2`
    font-size: 1.5em;
    margin: 10px 0;
`;

const cardDescription = styled.p`
    font-size: 1em;
    color: gray;
`;

const card = ({ title, description, imageUrl }) => (
    <cardContainer>
        <image src={imageUrl} alt={title} />
        <cardTitle>{title}</cardTitle>
        <cardDescription>{description}</cardDescription>
    </cardContainer>
);

export default card;



























