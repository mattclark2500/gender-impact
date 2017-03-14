import React, { PropTypes } from 'react';
import ExampleBoxContainer from '../containers/ExampleBoxContainer';

const SubTopicSlide = (props) => {

    const { title, subTopicIndex, description, imageLocation } = props;

    return (
        <div className="swiper-slide">
            <div className="slide-content-container">
                <img src={`/content/${imageLocation}/images/${subTopicIndex}/subTopicTitleImage.png`} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <ExampleBoxContainer subTopicIndex={subTopicIndex} imageLocation={imageLocation} />
            </div>
        </div>
    )
};

SubTopicSlide.proptypes = {
    subTopicIndex: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLocation: PropTypes.string.isRequired,
};

export default SubTopicSlide;