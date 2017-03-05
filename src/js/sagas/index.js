import { put, takeEvery, fork, select } from 'redux-saga/effects';
import readFile from '../common/readFile';

import {
    CHANGE_TOPIC,
    SET_TOPIC_DATA,
    SET_SUBTOPIC_DATA,
    SET_SUBTOPIC_STORIES
} from '../constants'

function* setTopicDataSaga() {
    try {
        const state = yield(select());
        const fileContents = yield readFile(`/content/${state.currentTopic.key}/content.json`);
        const data = {
            title: fileContents.data.title,
            description: fileContents.data.description,
            lessonsLearnt: fileContents.data.lessonsLearnt,
            subTopics: fileContents.data.subtopics.map(subTopic => {
                return {
                    title: subTopic.title,
                    description: subTopic.description,
                    active: false
                }
            }),
            stories: fileContents.data.subtopics.map(subTopic => {
                return subTopic.stories.map(story => {
                    return {
                        country: story.country,
                        title: story.title,
                        mainText: story.mainText,
                        highlightText: story.highlightText,
                        active: false
                    }
                });
            })
        };
        yield put({type: SET_TOPIC_DATA, title: data.title, description: data.description, lessonsLearnt: data.lessonsLearnt });
        yield put({type: SET_SUBTOPIC_DATA, subTopics: data.subTopics});
        yield put({type: SET_SUBTOPIC_STORIES, stories: data.stories });
    } catch(e) {
        console.warn('This saga failed', e);
    }
}

function* changeTopicSaga() {
    yield takeEvery(CHANGE_TOPIC, setTopicDataSaga);
}

export function* rootSaga() {
    yield fork(changeTopicSaga);
}