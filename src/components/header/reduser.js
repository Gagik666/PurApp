

export const initialHeader = {
  menuDisplay: "none",
  logOut: false
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
