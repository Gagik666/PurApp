export const initialWorkes = {
  workers: [],
};

export const WorkerInfoReducer = (state = {}, action) => {
  switch (action.type) {

    case "filtred":
        console.log(action.payload.workers);
      return {
        ...state,
        workers: [
            ...state.workers, action.payload.workers
        ]
      };

    default:
      return state;
  }
};

export const selectWorkerInfo = (state) => {
  return state.workerInfo.workers
};

export const add = (ststus, userName, email) => {
  return {
    type: "filtred",
    payload: {
        workers: 
            {status: ststus, userName: userName, email: email}
        
    }
  };
};
