export const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case "editCompanyName":
      return {
        ...state,
        companyName: action.companyName,
      };
     case "addCompanyLocation": 
     return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude
     } 
     case "addCompany": 
     return {
        ...state,
        companyList: [...state.companyList, action.companyL]
     }
    default:
      return state;
  }
};

export const initialModal = {
  companyName: "",
  latitude: 1,
  longitude: 2,
  companyList: []
};

export const selectCompany = (state) => state.modal;

export const editCompanyName = (companyName) => {
  return (dispatch) => {
    return dispatch({ type: "editCompanyName", companyName });
  };
};

export const addCompanyLocation = (latitude, longitude) => {
  return (dispatch) => {
    return dispatch({ type: "addCompanyLocation", latitude, longitude });
  };
};

export const addCompany = (companyL) => {
    return (dispatch) => {
        return dispatch({type: "addCompany" , companyL})
    }
}
