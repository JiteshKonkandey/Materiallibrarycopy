import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider';
import banner from './bannerimage.json'



const BannerImg = () => {
    return (
        <>
            <div className="bannerslider">
                <SimpleImageSlider 
                width={896}
                height={560}
                images={banner}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={1}
                slideDuration={2}
                />
            </div>
        </>

    )
}

export default BannerImg;