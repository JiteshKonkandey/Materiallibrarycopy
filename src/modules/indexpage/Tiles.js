import React from 'react';
import styled from "styled-components";
import "./indexpage.css";
import alltiles from './tilesfile.json'

const Tiles = styled.div`
    display:flex;
    margin: 0px 75px;
    flex-wrap: wrap;
    justify-content: flex-start;
    ${'' /* height: 100%; */}
`;

const MainIndexComponent = () => {
    return (
        <>
            <h3 className='subheading-1'>Most Popular Tiles Variety</h3>
            <Tiles>
                        {alltiles.map((gettile) => {
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

export default MainIndexComponent;
