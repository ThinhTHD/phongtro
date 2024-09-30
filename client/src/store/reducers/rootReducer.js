import authReducer from "./authReducer";
import useReducer from "./userReducer";
import {combineReducers} from "redux";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

const commonConfig= {
    storage,
    stateReconciler:autoMergeLevel2
}
const authConfig={
    ...commonConfig,
    key:'auth',
    whitelist:['isLoggedIn','token']
}
const rootReducer=combineReducers({
    auth:persistReducer(authConfig,authReducer),
    user:useReducer
})
export default rootReducer

