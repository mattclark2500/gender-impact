import {
    CHANGE_TOPIC,
    SET_TOPIC_DATA
} from '../constants'

const defaultState = {};

const currentTopic = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_TOPIC:
            return { key: action.newTopicId };

        case SET_TOPIC_DATA:
            return Object.assign({}, state, {
                title: action.title,
                description: action.description,
                lessonsLearnt: action.lessonsLearnt
            });
        default:
            return state;
    }
}

export default currentTopic;