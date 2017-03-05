import subTopics from './subTopics';
import { UPDATE_SUBTOPIC_STATUS } from '../constants';

describe("subTopic Reducer", () => {
    it("sets active status of current subtopic to true and others to false", () => {
        const initialState = [
            {
                active: true
            },
            {
                active: false
            },
            {
                active: false
            },
        ];

        const action = {
            type: UPDATE_SUBTOPIC_STATUS,
            index: 1
        };

        const expectedResult = [
            {
                active: false
            },
            {
                active: true
            },
            {
                active: false
            },
        ];

        expect(subTopics(initialState, action)).toEqual(expectedResult);
    });

    it("sets all subtopics to active: false if an unknown index is passed", () => {
        const initialState = [
            {
                active: true
            },
            {
                active: false
            },
            {
                active: false
            },
        ];

        const action = {
            type: UPDATE_SUBTOPIC_STATUS,
            index: -1
        };

        const expectedResult = [
            {
                active: false
            },
            {
                active: false
            },
            {
                active: false
            },
        ];

        expect(subTopics(initialState, action)).toEqual(expectedResult);
    })
});