import React, { PropTypes } from 'react';

const HeroImage = ({ imageLocation}) => {
    return (
        <div className="hero-image" id="heroImage">
            <div className="gradient"></div>
            <div className="bg-img" id="hero-bg-img">
                <img src={`/content/${imageLocation}/images/bg-img.jpg`} alt="Topic Banner" />
            </div>
        </div>
    )
};

HeroImage.propTypes = {
    imageLocation: PropTypes.string.isRequired
};

export default HeroImage;