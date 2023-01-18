export const loadingReducer = (state = {}, action) => {
    switch (action.type) {
        case "editLoading":
            return {
                ...state,
                loadingDisplay: action.display
            }
        default:
            return state
    }
}

export const initialLoading = {
    loadingDisplay: "none"
}

export const selectLoading = (state) => state.loading.loadingDisplay

export const editLoading = (display) => {
    return (dispatch) => {
        return dispatch ({type: "editLoading", display})
    }
}

