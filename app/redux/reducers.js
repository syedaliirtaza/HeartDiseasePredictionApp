import {SET_USER_NAME, SET_USER_AGE, SET_USER_SEX, SET_USER_CP, SET_USER_TRESTBPS, SET_USER_CHOL, SET_USER_FBS, SET_USER_RESTECG, SET_USER_THALACH, SET_USER_EXANG, SET_USER_LDPEAK, SET_USER_SLOPE, SET_USER_CA, SET_USER_THAL } from "./action";

const initialState = {
    name: "",
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    ldpeak: "",
    slope: "",
    ca: "",
    thal: ""
}

function userReducer(state = initialState, action){
    switch(action.type){
        case SET_USER_NAME:
            return { ...state, name: action.payload}
        case SET_USER_AGE:
            return { ...state, age: action.payload}
        case SET_USER_SEX:
            return { ...state, sex: action.payload}
        case SET_USER_CP:
            return { ...state, cp: action.payload}
        case SET_USER_TRESTBPS:
            return { ...state, trestbps: action.payload}
        case SET_USER_CHOL:
            return { ...state, chol: action.payload}
        case SET_USER_FBS:
            return { ...state, fbs: action.payload}
        case SET_USER_RESTECG:
            return { ...state, restecg: action.payload}
        case SET_USER_THALACH:
            return { ...state, thalach: action.payload}
        case SET_USER_EXANG:
            return { ...state, exang: action.payload}
        case SET_USER_LDPEAK:
            return { ...state, ldpeak: action.payload}
        case SET_USER_SLOPE:
            return { ...state, slope: action.payload}
        case SET_USER_CA:
            return { ...state, ca: action.payload}
        case SET_USER_THAL:
            return { ...state, thal: action.payload}
        default:
            return state;                                                    
    }
}

export default userReducer;