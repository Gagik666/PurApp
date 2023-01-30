export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "addCurentUser":
      return {
        currentUser: action.val,
      };
    default:
      return state;
  }
};

export const initialUser = {
  currentUser: {},
};

export const selectCurrentUser = (state) => state.user.currentUser;

export const editCurrentUser = (val) => {
  return (dispatch) => {
    return dispatch({ type: "addCurentUser", val });
  };
};
