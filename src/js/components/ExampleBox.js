import React, { PropTypes } from 'react';
import renderHTML from 'react-render-html';
import StoryNavigationItem from './StoryNavigationItem';

const ExampleBox  = (props) => {

    const { stories } = props;

    const displayActiveStory = () => {
        return stories.filter(story => story.active === true).map((story, index) => {
            return (
                <div key={index} className="active-story">
                    <h3>{story.title}</h3>
                    <div className="content">
                        <div className="main-text">{renderHTML(story.mainText)}</div>
                        <p className="highlight-text">{story.highlightText}</p>
                    </div>
                </div>
            )
        });
    };

    const storyNavigation = () => {
        return stories.map((story, index) => (
            <StoryNavigationItem key={index} story={story} index={index} {...props} />
        ));
    };

    if (stories.length > 0) {
        return (
            <div className="success-examples">
                <h3 className="box-heading">Successful Examples</h3>
                <div className="content-box">
                    <div className="story-navigation">
                        {storyNavigation()}
                    </div>
                    {displayActiveStory()}
                </div>
            </div>
        )
    }
    return null;
};

ExampleBox.proptypes = {
    changeStoryActiveState: PropTypes.func.isRequired,
    stories: PropTypes.array.isRequired,
    subTopicIndex: PropTypes.number.isRequired,
    imageLocation: PropTypes.string.isRequired
};

export default ExampleBox;