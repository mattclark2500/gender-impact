import {
    CHANGE_TOPIC,
    UPDATE_STORY_STATUS,
    UPDATE_SUBTOPIC_STATUS
} from '../constants';

export const changeTopic = (newTopicId) => {
    return {
        type: CHANGE_TOPIC,
        newTopicId
    }
};

export const changeSubTopicActiveState = (index) => {
    return {
        type: UPDATE_SUBTOPIC_STATUS,
        index
    }
};

export const changeStoryActiveState = (storyIndex, subTopicIndex) => {
    return {
        type: UPDATE_STORY_STATUS,
        storyIndex,
        subTopicIndex
    }
}

export const setInitialTopic = (newTopicId) => {
    return {
        type: CHANGE_TOPIC,
        newTopicId
    }
};


