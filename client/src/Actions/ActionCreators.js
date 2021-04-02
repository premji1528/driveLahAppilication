import * as Actions from './Actions';

let ActionCreators = {
    test(data) {
        return (dispatch) => {
            dispatch({ type: Actions.TEST_AUTH, payload: data })
        }
    }
};

export default ActionCreators;