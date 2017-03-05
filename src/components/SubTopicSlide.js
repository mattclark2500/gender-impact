import React, { PropTypes } from 'react';
import ExampleBoxContainer from '../containers/ExampleBoxContainer';

const SubTopicSlide = (props) => {

    const { title, subTopicIndex } = props;

    return (
        <div className="swiper-slide">
            <h1>{title}</h1>
            <ExampleBoxContainer subTopicIndex={subTopicIndex} />
        </div>
    )
};

SubTopicSlide.proptypes = {
    subTopicIndex: PropTypes.number.isRequired
}

export default SubTopicSlide;