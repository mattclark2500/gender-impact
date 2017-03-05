import { filterActiveStories } from './ExampleBoxContainer';

describe("Example Box Container >> ", () => {
    it("returns an array of stories for the the active subtopic", () => {
        const stories = [
            [
                {title: 'Story-1.1'},
                {title: 'Story-1.2'}
            ],
            [
                {title: 'Story-2.1'},
                {title: 'Story-2.2'}
            ],
            [
                {title: 'Story-3.1'},
                {title: 'Story-3.2'},
            ]
        ];

        const subtopics = [
            {active: false},
            {active: true},
            {active: false}
        ];

        const expectedResult = [
            {title: 'Story-2.1'},
            {title: 'Story-2.2'}
        ]

        expect(filterActiveStories(subtopics, stories)).toEqual(expectedResult);
    })
})