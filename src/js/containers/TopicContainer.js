import { connect } from 'react-redux';
import { changeTopic } from '../actions';
import TopicPage from '../components/TopicPage';
import { setInitialTopic } from '../actions';

const mapStateToProps = (state) => ({
    backgroundImageSrc: '/images/hero-image.jpg',
    description: state.currentTopic.description,
    lessonsLearnt: state.currentTopic.lessonsLearnt,
    sectionTitle: 'Gender Impacts',
    topics: state.topics,
    topicTitle: state.currentTopic.title
});

const mapDispatchToProps = (dispatch) => ({
    changeTopic: (newTopicId) => dispatch(changeTopic(newTopicId)),
    setInitialTopic: (currentTopic) => dispatch(setInitialTopic(currentTopic))
});

const TopicContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopicPage);

export default TopicContainer;