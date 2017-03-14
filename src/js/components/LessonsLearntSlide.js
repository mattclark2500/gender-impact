import React, { PropTypes } from 'react';

const LessonsLearntSlide = (props) => {

    const { lessonsLearnt, imageLocation } = props;

    if (lessonsLearnt && lessonsLearnt.length > 0 ) {
        return (
            <div className="swiper-slide">
                <div className="slide-content-container">
                    <h3>Lessons Learnt</h3>
                    <ul>
                        {lessonsLearnt.map((lesson, index) =>
                            <li key={index} className="lesson-learnt-content">
                                <div className="first"><img src={`/content/${imageLocation}/images/lessons-learnt/lesson-learnt-${index}.png`} role="presentation" /></div>
                                <div className="second"><p>{lesson}</p></div>
                            </li>)}
                    </ul>
                </div>
            </div>
        )
    }

    return null;

};

LessonsLearntSlide.proptypes = {
    title: PropTypes.string.isRequired,
    lessonsLearnt: PropTypes.array.isRequired,
    imageLocation: PropTypes.string.isRequired
};

export default LessonsLearntSlide;