export const workerItemReducer = (state = {}, action) => {
  switch (action.type) {
    case "editWorkerItem":
      return {
        ...state,
        workerItem: action.val,
      };
    case "editSaveRatingDisplay":
      return {
        ...state,
        saveRatingDisplay: action.display,
      };
    case "editSaveRatingContainer":
      return {
        ...state,
        ratindContainer: action.display,
      };
    case "editBtnRating":
      return {
        ...state,
        btnRating: action.display,
      };
    case "editWorkerStatistickList":
      return {
        ...state,
        workerStatistickList: [...state.workerStatistickList, action.val],
      };
    default:
      return state;
  }
};

export const initialWorkerItem = {
  workerItem: {},
  saveRatingDisplay: "flex",
  ratindContainer: "flex",
  btnRating: "none",
  workerStatistickList: [],
};

export const selectWorkerItem = (state) => state.workerItem.workerItem;
export const selectSaveRating = (state) => state.workerItem.saveRatingDisplay;
export const selectRatingContainer = (state) => state.workerItem.ratindContainer;
export const selectBtnRating = (state) => state.workerItem.btnRating;
export const selectWorkerStatistickList = (state) =>
  state.workerItem.workerStatistickList;
export const editWorkerItem = (val) => {
  return (dispatch) => {
    return dispatch({ type: "editWorkerItem", val });
  };
};

export const editSaveRatingDisplay = (display) => {
  return (dispatch) => {
    return dispatch({ type: "editSaveRatingDisplay", display });
  };
};
export const editSaveRatingContainer = (display) => {
  return (dispatch) => {
    return dispatch({ type: "editSaveRatingContainer", display });
  };
};

export const editBtnRating = (display) => {
  return (dispatch) => {
    return dispatch({ type: "editBtnRating", display });
  };
};

export const editWorkerStatistickList = (val) => {
    return (dispatch) => {
      return dispatch({ type: "editWorkerStatistickList", val });
    };
  };
