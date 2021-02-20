const CountReducer = (state = 0, action) => {
    switch(action.type){
        case "ADD_VALUE":
            return state + 1;
        case "RESET_VALUE":
            return 0;
        default:
            return state
    }
}

export default CountReducer;