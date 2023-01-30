

export const initialHeader = {
  menuDisplay: "none",
  logOut: false,
  changeLocation: false
};

export const headerReduser = (state = {}, action) => {
  switch (action.type) {
    case "editText":
      return {
        ...state,
        menuDisplay: action.payload.menuDisplay
      };
      case "logOut": 
      return {
        ...state,
        logOut: action.payload.logOut
      }
      case "changeLocation": 
      return {
        ...state,
        changeLocation: action.payload.changeLocation
      }
    default:
      return state;
  }
};

export const selectMenuDisplay = (state) => {
  return state.header.menuDisplay;
};
export const selectlogOut = (state) => {
  return state.header.logOut
}
export const selectChangeLocation = (state) => {
  return state.header.changeLocation
}

export const editMenuDisplay = (display) => {
  return {
    type: "editText",
    payload: {
      menuDisplay: display,
    },
  };
};

export const logOut = (val) => {
  return {
    type: "logOut",
    payload: {
      logOut: val
    }
  }
}
export const changeLocation = (val) => {
  return {
    type: "changeLocation",
    payload: {
      changeLocation: val
    }
  }
}
