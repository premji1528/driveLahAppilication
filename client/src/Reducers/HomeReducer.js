const LEADS_ON_SUCCESS = 'LEADS_ON_SUCCESS';

const initialstate = {
    leadsArray: []
}

let homeReducer = (state = initialstate, action) => {
    switch (action.type) {

        case LEADS_ON_SUCCESS:
            return {
                leadsArray: action.payload
            }

        default:
            return { ...state };

    }
}

export default homeReducer;