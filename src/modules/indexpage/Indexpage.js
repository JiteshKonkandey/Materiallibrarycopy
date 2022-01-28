import React from 'react'
import HeaderIndexComponent from './HeaderIndexComponent';
import BannerImg from './BannerImg';
import MainIndexTiles from './Tiles';
import Categories from './Categories';
import Footer from './Footer' 

const Indexpage = () => {
    return (
        <div>
            <HeaderIndexComponent />
            <BannerImg />
            <MainIndexTiles />
            <Categories />
            <Footer />
        </div> 
    )
}

export default Indexpage;
