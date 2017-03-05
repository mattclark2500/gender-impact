import React, { PropTypes } from 'react';

const ExampleBox  = ({ stories, changeStoryActiveState, subTopicIndex }) => {

    const displayActiveStory = () => {
        const something = stories.filter(story => story.active === true).map((story, index) => (
            <div key={index}>
                <h1>{story.title}</h1>
                <p>{story.mainText}</p>
                <p>{story.highlightText}</p>
            </div>
        ));
        return something;
    };

    if (stories.length > 0) {
        return (
            <div>
                <h1>Successful Examples</h1>
                <ul>
                {stories.map((story, index) => (
                    <li key={index} onClick={() => changeStoryActiveState(index, subTopicIndex)}>{story.country}</li>
                ))}
                </ul>
                {displayActiveStory()}
            </div>
        )
    }
    return null;
};

ExampleBox.proptypes = {
    changeStoryActiveState: PropTypes.func.isRequired,
    stories: PropTypes.array.isRequired,
    subTopicIndex: PropTypes.number.isRequired
}

export default ExampleBox;