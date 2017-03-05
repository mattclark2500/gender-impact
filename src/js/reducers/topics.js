import {
    INITIALISE
} from '../constants'

const defaultState = [
    {
        id: 1,
        title: 'Food and Nutritional Security',
        contentPath: 'food-and-nutritional-security'
    },
    {
        id: 2,
        title: 'Water & Governance of Water',
        contentPath: 'water-and-governance-of-water'
    },
    {
        id: 3,
        title: 'Time Poverty',
        contentPath: 'time-poverty'
    },
    {
        id: 4,
        title: 'Access to Resources',
        contentPath: 'access-to-resources'
    },
    {
        id: 5,
        title: 'Leadership',
        contentPath: 'leadership'
    },
    {
        id: 6,
        title: 'Gender Groups at Risk',
        contentPath: 'gender-groups-at-risk'
    }
];

const topics = (state = defaultState, action) => {
    switch (action.type) {
        case INITIALISE:
            return state;

        default:
            return state;
    }
}

export default topics;