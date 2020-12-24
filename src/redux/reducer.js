const initialState = {
    visible: true,
    opaque: false,
};


function rootReducer(state = initialState, action) {


    switch (action.type) {
        case 'SET_INVISIBLE':
            console.log("W1, invisible");
            return Object.assign({}, state, {
                visible: false
            });
        case 'SET_VISIBLE':
            console.log("W1, visible");
            return Object.assign({}, state, {
                visible: true
            });
        case 'SET_OPAQUE':
            console.log("W2, opa");
            return Object.assign({}, state, {
                opaque: true,
                visible: true,
            });
        case 'SET_TRANSPARENT':
            return Object.assign({}, state, {
                opaque: false,
                visible: state.opaque !== true
            });
        default:
            return state
    }
}

export default rootReducer;