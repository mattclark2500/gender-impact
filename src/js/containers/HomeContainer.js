import { connect } from 'react-redux';
import Home from '../components/Home';
import { changeTopic } from '../actions';

const mapStateToProps = (state) => ({
    topics: state.topics,
    sectionTitle: 'Gender Impacts'
});

const mapDispatchToProps = (dispatch) => ({
    changeTopic: (newTopicId) => dispatch(changeTopic(newTopicId))
});

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;