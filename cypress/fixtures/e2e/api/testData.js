export const td = {

    controlCase: {
        description: "Case 0: Testing the example case given in the setup instructions",
        requestData: {
            roomSize: [5, 5],
            coords: [1, 2],
            patches: [[1, 0], [2, 2], [2, 3]],
            instructions: "NNESEESWNWW"
        },
        expectedResults: {
            coords: [1, 3],
            patches: 1
        }
    },

    invalidDataCase: {
        description: "Case 1: Testing a case in which invalid data types are passed",
        requestData: {
            roomSize: null,
            coords: null,
            patches: null,
            instructions: null
        }
    },

    noInstructionCase: {
        description: "Case 2: Testing a case in which no instructions are given",
        requestData: {
            "roomSize": [5, 5],
            "coords": [1, 1],
            "patches": [],
            "instructions": ""
        },
        expectedResults: {
            "coords": [1, 1],
            "patches": 0
        }
    },

    noPatchesCase: {
        description: "Case 3: Testing a case in which there are no patches",
        requestData: {
            "roomSize": [5, 5],
            "coords": [1, 1],
            "patches": [],
            "instructions": "N"
        },
        expectedResults: {
            "coords": [1, 2],
            "patches": 0
        }
    },

    verticalLineCase: {
        description: "Case 4: Testing a case to clean multiple patches in a straight vertical line",
        requestData: {
            "roomSize": [1, 7],
            "coords": [0, 0],
            "patches": [[0, 2], [0, 3], [0, 4]],
            "instructions": "NNNNNNNNNNNNNN"
        },
        expectedResults: {
            "coords": [0, 6],
            "patches": 3
        }
    },

    originNoPatchesCase: {
        description: "Case 5: Testing a case to move the hoover in all directions, and return back to the origin, no patches",
        requestData: {
            roomSize: [10, 10],
            coords: [2, 2],
            patches: [],
            instructions: "NNNSSSEEEWWW"
        },
        expectedResults: {
            coords: [2, 2],
            patches: 0
        }
    },

    originPatchesCase: {
        description: "Case 6: Testing a case to move the hoover in all directions, and return back to the origin, with patches",
        requestData: {
            roomSize: [10, 10],
            coords: [2, 2],
            patches: [[2, 3], [2, 4], [3, 2]],
            instructions: "NNNSSSEEEWWW"
        },
        expectedResults: {
            coords: [2, 2],
            patches: 3
        }
    }
};