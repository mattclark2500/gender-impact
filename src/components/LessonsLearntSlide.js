import React, { PropTypes } from 'react';

const LessonsLearntSlide = (props) => {

    const { lessonsLearnt } = props;

    if (lessonsLearnt && lessonsLearnt.length > 0 ) {
        return (
            <div className="swiper-slide">
                <h1>Lessons Learnt</h1>
                <ul>
                    {lessonsLearnt.map((lesson, index) => <li key={index}>{lesson}</li>)}
                </ul>
            </div>
        )
    }

    return null;

};

LessonsLearntSlide.proptypes = {
    title: PropTypes.string.isRequired,
    lessonsLearnt: PropTypes.array.isRequired
}

export default LessonsLearntSlide;