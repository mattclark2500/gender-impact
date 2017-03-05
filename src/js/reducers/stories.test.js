import stories from './stories';
import { UPDATE_STORY_STATUS } from '../constants'

describe("Story Reducer Tests >> ", () => {
    it('sets active status of current story to true and others to false', () => {
        const initialState = [
            [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ],
        ];

        const action = {
            type: UPDATE_STORY_STATUS,
            storyIndex: 1,
            subTopicIndex: 1
        };

        const expectedResult = [
            [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: true,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ],
        ];

        expect(stories(initialState, action)).toEqual(expectedResult);
    });

    it('sets the status of all stories to false if unknown story index is passed', () => {
        const initialState = [
            [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ],
        ];

        const action = {
            type: UPDATE_STORY_STATUS,
            storyIndex: -1,
            subTopicIndex: 1
        };

        const expectedResult = [
            [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ],
        ];
        ;

        expect(stories(initialState, action)).toEqual(expectedResult);
    });

    it('sets active status of current story to true and others to false', () => {
        const initialState = [
            [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ],
        ];

        const action = {
            type: UPDATE_STORY_STATUS,
            storyIndex: 1,
            subTopicIndex: 1
        };

        const expectedResult = [
            [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: true,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ],
        ];
        ;

        expect(stories(initialState, action)).toEqual(expectedResult);
    });

    it('sets the status of all stories to false if unknown subtopic index is passed', () => {
        const initialState = [
            [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ],
        ];

        const action = {
            type: UPDATE_STORY_STATUS,
            storyIndex: 1,
            subTopicIndex: -1
        };

        const expectedResult = [
            [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ], [
                {
                    active: false,
                },
                {
                    active: false,
                },
                {
                    active: false,
                }
            ],
        ];

        expect(stories(initialState, action)).toEqual(expectedResult);
    });
})