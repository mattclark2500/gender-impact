import React, { PropTypes } from 'react';

const StoryNavigationItem = (props) => {

    const {
        imageLocation,
        index,
        changeStoryActiveState,
        story,
        subTopicIndex
    } = props;

    const activeStory = (story.active) ? 'active' : 'inactive';

    return (
        <div className={`item-wrapper ${activeStory}`} onClick={() => changeStoryActiveState(index, subTopicIndex)}>
            <div className="inner">
                <img src={`/content/${imageLocation}/images/${subTopicIndex}/story-${index}.jpg`} role="presentation"/>
                <p className="country-title">{story.country}</p>
            </div>
        </div>
    )
};

StoryNavigationItem.proptypes = {
    index: PropTypes.number.isRequired,
    story: PropTypes.object.isRequired
};

export default StoryNavigationItem;