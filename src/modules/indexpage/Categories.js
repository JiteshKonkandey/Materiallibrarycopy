import React from 'react';
import styled from "styled-components";
import "./indexpage.css";
import sponsoredProducts from './tilesfile.json';

const Tiles = styled.div`
    display:flex;
    margin: 0px 75px;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const Categories = () => {
    return (
        <>
            <h3 className='sponsoredSubheading-1'>Sponsored Products</h3>
            <Tiles>
                        {sponsoredProducts.map((gettile) => {
                            return (
                                
                                    <div className="tilesall" key={gettile.id}>
                                        <div className='imagediv'><img className="tilesImages" src={gettile.url} alt='tiles'/></div>
                                        <h3 className='tilesheading'>{gettile.heading}</h3>
                                    </div>
                            )
                        })}
            </Tiles>
        </>
    );
};

export default Categories;