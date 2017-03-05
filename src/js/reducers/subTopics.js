import {
    INITIALISE,
    SET_SUBTOPIC_DATA,
    UPDATE_SUBTOPIC_STATUS
} from '../constants';

const defaultState = [];

const subTopics = (state = defaultState, action) => {
    switch(action.type) {
        case INITIALISE:
            return action.currentTopic;

        case SET_SUBTOPIC_DATA:
            return action.subTopics;

        case UPDATE_SUBTOPIC_STATUS:
            return state.map((subtopic, index) => {
                const activeState = (action.index === index) ? { active: true } : { active: false };
                return Object.assign({}, subtopic, activeState);
            });

        default:
            return state;
    }

}

export default subTopics;