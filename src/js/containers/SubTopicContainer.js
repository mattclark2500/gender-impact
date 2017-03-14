import { connect } from 'react-redux';
import SubTopics from '../components/SubTopics';
import { changeSubTopicActiveState } from '../actions';
import { changeStoryActiveState } from '../actions';

const mapStateToProps = (state) => ({
    lessonsLearnt: state.currentTopic.lessonsLearnt,
    subtopics: state.subtopics,
    imageLocation: state.currentTopic.key
});

const mapDispatchToProps = (dispatch) => ({
    changeSubTopicActiveState: (index) => dispatch(changeSubTopicActiveState(index)),
    changeStoryActiveState: (storyIndex, subTopicIndex) => dispatch(changeStoryActiveState(storyIndex, subTopicIndex))
});

const SubTopicContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubTopics);

export default SubTopicContainer;