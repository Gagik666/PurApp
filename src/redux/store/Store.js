import { applyMiddleware, combineReducers, createStore } from "redux";
import { headerReduser, initialHeader } from "../../components/header/reduser";
import { initialSwitch, svitchReduser } from "../../components/switch/reduser";
// import {
//   initialWorkes,
//   WorkerInfoReducer,
// } from "../../components/workerList/reduser";
// import {
//   currentUserReduser,
//   initialCurrentUser,
// } from "../../db/firebase/reduser";
import { initialIntro, introReduser } from "../../ui/intru/reduser";
// import {
//   initialLocation,
//   splashScreenReduser,
// } from "../../ui/splashScreen/reduser";
import thunk from "redux-thunk";
import { initialModal, modalReducer } from "../../ui/signUp/components/modal/reducer";
import { initialUser, userReducer } from "../../firebase/reducer";
// import { initialWorkerStatus, workerReducerStatus } from "../../ui/worker/reducer";

export const store = createStore(
  combineReducers({
    // location: splashScreenReduser,
    user: userReducer,
    intro: introReduser,
    switch: svitchReduser,
    modal: modalReducer,
    header: headerReduser,
    // workerInfo: WorkerInfoReducer,
    // workerStatus: workerReducerStatus
  }),
  {
    // location: initialLocation,
    user: initialUser,
    intro: initialIntro,
    switch: initialSwitch,
    modal: initialModal,
    header: initialHeader,
    // workerInfo: initialWorkes,
    // workerStatus: initialWorkerStatus
  },
  applyMiddleware(thunk)
);
