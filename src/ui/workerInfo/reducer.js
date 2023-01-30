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
    case "editRatingList":
      if (action.list !== null) {
        return {
          ...state,
          ratingList: [...state.ratingList, action.list],
        };
      } else {
        return {
          ...state,
          ratingList: [],
        };
      }

    default:
      return state;
  }
};

export const initialWorkerItem = {
  workerItem: {},
  saveRatingDisplay: "flex",
  btnRating: "none",
  workerStatistickList: [],
  ratingList: [],
};

export const selectWorkerItem = (state) => state.workerItem.workerItem;
export const selectSaveRating = (state) => state.workerItem.saveRatingDisplay;
export const selectBtnRating = (state) => state.workerItem.btnRating;
export const selectWorkerStatistickList = (state) =>
  state.workerItem.workerStatistickList;
export const selectRatingLiist = (state) => state.workerItem.ratingList;

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

export const editRatingList = (list) => {
  return (dispatch) => {
    return dispatch({ type: "editRatingList", list });
  };
};
