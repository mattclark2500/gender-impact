import React, { PropTypes, Component } from 'react';
import Swiper from 'react-id-swiper';
import SubTopicSlide from './SubTopicSlide';
import LessonsLearntSlide from './LessonsLearntSlide';

class SubTopics extends Component {

    constructor(props) {
        super(props);
        this.goNext = this.goNext.bind(this);
        this.goPrev = this.goPrev.bind(this);
        this.swiper = null;
    }

    goNext() {
        if (this.swiper) this.swiper.slideNext()
    }

    goPrev() {
        if (this.swiper) this.swiper.slidePrev()
    }

    subTopicNavigation() {
        try {
            return this.props.subtopics.map((subtopic, index) => <li key={index} onClick={() => this.handleClickEvent(index)}>{subtopic.title}</li>);
        } catch (e) {
            console.warn('An error: ', e);
        }
    };

    handleClickEvent (index) {
        this.swiper.slideTo(index + 1); // +1 because we've inserted lessons learnt in here for presentation we need to increment the index to navigate to the correct slide.
    };

    render() {
        const swiperParameters = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            prevButtonCustomizedClass: 'customized-prev',
            nextButtonCustomizedClass: 'customized-next',
            paginationCustomizedClass: 'customized-pagination',
            containerClass: 'swiper-container customized-swiper-container',
            onInit: (swiper) => {
                this.swiper = swiper;
            },
            onTransitionStart: (swiper) => {
                // -1 to account for adding an extra element to the slide array, which doesn't correspond to the ids in state.
                this.props.changeSubTopicActiveState(swiper.activeIndex - 1);
                this.props.changeStoryActiveState(0, swiper.activeIndex - 1);
            }
        };

        if (this.props.subtopics.length > 0) { // Wait for redux store to completely update before returning react element, otherwise return null
            return (
                <div>
                    <ul>
                        <li key='lessons-learnt' onClick={() => this.handleClickEvent(-1)}>Lessons Learnt</li>
                        {this.subTopicNavigation()}
                    </ul>
                    <Swiper {... swiperParameters}>
                        <LessonsLearntSlide key="lessons-learnt" lessonsLearnt={this.props.lessonsLearnt} />
                        {this.props.subtopics.map((subtopic, index) => <SubTopicSlide key={index} {...subtopic} subTopicIndex={index} />)}
                    </Swiper>
                </div>
            )
        }
        return null;
    }

}

SubTopics.propTypes = {
    changeSubTopicActiveState: PropTypes.func.isRequired,
    changeStoryActiveState: PropTypes.func.isRequired,
    lessonsLearnt: PropTypes.array,
    subtopics: PropTypes.array.isRequired
};

export default SubTopics;