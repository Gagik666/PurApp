export const svitchReduser = (state = {}, action) => {
  switch (action.type) {
    case "editInitial":
      return {
        ...state,
        initial: action.payload.initial,
      };
    case "editInputhVisible":
      return {
        ...state,
        inputVisible: action.payload.inputVisible,
      };
    case "editModalVisible":
      return {
        ...state,
        modalVisible: action.payload.modalVisible,
      };
    case "editUser":
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export const initialSwitch = {
  initial: 1,
  inputVisible: "flex",
  modalVisible: false,
  company: [],
  user: "Manager",
};

export const selectSvitch = (state) => {
  return state.switch.initial;
};

export const selectInputVisible = (state) => {
  return state.switch.inputVisible;
};

export const selectModalVisible = (state) => {
  return state.switch.modalVisible;
};

export const selectCompanyList = (state) => {
  return state.switch.company;
};

export const selectUser = state => state.switch.user

export const editInitial = (initial) => {
  return {
    type: "editInitial",
    payload: {
      initial: initial,
    },
  };
};

export const editInputVisible = (display) => {
  return {
    type: "editInputhVisible",
    payload: {
      inputVisible: display,
    },
  };
};

export const editModalVisivle = (visible) => {
  return {
    type: "editModalVisible",
    payload: {
      modalVisible: visible,
    },
  };
};

export const editUser = (user) => {
  return (dispatch) => {
    return dispatch({
      type: "editUser",
      payload: {
        user: user,
      },
    });
  };
};
