import {
    SET_SUBTOPIC_STORIES,
    UPDATE_STORY_STATUS
} from '../constants';

const defaultState = [];

const stories = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SUBTOPIC_STORIES:
            return action.stories;

        case UPDATE_STORY_STATUS:
            const test = state.map((stories, index) => {
                if (action.subTopicIndex == index) {
                    return stories.map((story, index) => {
                        const activeState = (action.storyIndex == index) ? { active: true } : { active: false };
                        return Object.assign({}, story, activeState)
                    })
                }
                return stories;
            });
            return test;

        default:
            return state;
    }
};

export default stories;