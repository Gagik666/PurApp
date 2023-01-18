import { applyMiddleware, combineReducers, createStore } from "redux";
import { headerReduser, initialHeader } from "../../components/header/reduser";
import { initialSwitch, svitchReduser } from "../../components/switch/reduser";
import {
  initialWorkes,
  WorkerInfoReducer,
} from "../../components/workerList/reduser";
import { initialIntro, introReduser } from "../../ui/intru/reduser";
import thunk from "redux-thunk";
import { initialModal, modalReducer } from "../../ui/signUp/components/modal/reducer";
import { initialUser, userReducer } from "../../firebase/reducer";
import { initialWorkerStatus, workerReducerStatus } from "../../ui/worker/reducer";
import { initialWorkerItem, workerItemReducer } from "../../ui/workerInfo/reducer";
import { initialLoading, loadingReducer } from "../../components/loading/reducer";

export const store = createStore(
  combineReducers({
    user: userReducer,
    intro: introReduser,
    switch: svitchReduser,
    modal: modalReducer,
    header: headerReduser,
    workerList: WorkerInfoReducer,
    workerStatus: workerReducerStatus,
    workerItem: workerItemReducer,
    loading: loadingReducer
  }),
  {
    user: initialUser,
    intro: initialIntro,
    switch: initialSwitch,
    modal: initialModal,
    header: initialHeader,
    workerList: initialWorkes,
    workerStatus: initialWorkerStatus,
    workerItem: initialWorkerItem,
    loading: initialLoading
  },
  applyMiddleware(thunk)
);
