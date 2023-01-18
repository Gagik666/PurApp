export const workerReducerStatus = (state = {}, action) => {
    switch (action.type) {
        case "editStatusButton":
        return {
            ...state,
            text: action.text,
            display: action.display
        }
        default:
            break;
    }
    return state
}

export const initialWorkerStatus = {
    text: "",
    display: "flex"
}

export const workerStatus = state => state.workerStatus

export const editStatusButton = (text, display) => {
    return (dispatch) => {
        return dispatch ({type: "editStatusButton", text, display})
    }
}