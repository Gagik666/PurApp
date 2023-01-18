export const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case "editCompanyName":
      return {
        ...state,
        companyName: action.companyName,
      };
     case "addLocation": 
     return {
        ...state,
        currentLatitude: action.latitude,
        currentLongitude: action.longitude
     } 
     case "editCompanyData": 
     return {
        ...state,
        companyData: action.data,
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
  currentLatitude: 1,
  currentLongitude: 2,
  companyData: {},
  companyList: []
};

export const selectCompany = (state) => state.modal;
export const selectCompanyData = state => state.modal.companyData
export const editCompanyName = (companyName) => {
  return (dispatch) => {
    return dispatch({ type: "editCompanyName", companyName });
  };
};

 

export const addLocation = (latitude, longitude) => {
  return (dispatch) => {
    return dispatch({ type: "addLocation", latitude, longitude });
  };
};
export const editCompanyData = (data) => {
  return (dispatch) => {
    return dispatch({ type: "editCompanyData", data });
  };
};

export const addCompany = (companyL) => {
    return (dispatch) => {
        return dispatch({type: "addCompany" , companyL})
    }
}
