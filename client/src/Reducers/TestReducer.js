const TEST_SUCCESS = 'TEST_SUCCESS';

const initialstate = {
    test: ''
}

let TestReducer = (state = initialstate, action) => {
    switch (action.type) {

        case TEST_SUCCESS:
            return Object.assign({}, state, action.payload)

        default:
            return { ...state };

    }
}
export default TestReducer;