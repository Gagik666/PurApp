export const initialWorkes = {
  workers: [],
};

export const WorkerInfoReducer = (state = {}, action) => {
  switch (action.type) {

    case "editWorkerList":
        return {
          ...state,
          workers: [...state.workers, action.worker]
        }
    case "resetWorkerList":
        return {
          ...state,
          workers: []
        }
    default:
      return state;
  }
};

export const selectWorkers = state => state.workerList.workers

export const editWorkerList = (worker) => {
  return (dispatch) => {
    return dispatch({type: "editWorkerList", worker})
  }
}
export const resetWorkerList = (worker) => {
  return (dispatch) => {
    return dispatch({type: "resetWorkerList", worker})
  }
}

 
