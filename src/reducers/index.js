import { combineReducers } from 'redux';
import currentTopic from './currentTopic';
import topics from './topics';
import subtopics from './subTopics';
import stories from './stories';

const app = combineReducers({
    currentTopic,
    topics,
    subtopics,
    stories
});

export default app;