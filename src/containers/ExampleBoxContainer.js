import findIndex from 'lodash/findIndex';
import flatten from 'lodash/flatten';
import { changeStoryActiveState } from '../actions';

import { connect } from 'react-redux';
import ExampleBox from '../components/ExampleBox';

export const filterActiveStories = (subtopics, stories) => {
    const index = findIndex(subtopics, s => s.active);
    return flatten(stories.slice(index, index + 1));
};

const mapStateToProps = (state) => ({
    stories: filterActiveStories(state.subtopics, state.stories)
});

const mapDispatchToProps = (dispatch) => ({
    changeStoryActiveState: (storyIndex, subTopicIndex) => dispatch(changeStoryActiveState(storyIndex, subTopicIndex))
});

const SubTopicContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExampleBox);

export default SubTopicContainer;