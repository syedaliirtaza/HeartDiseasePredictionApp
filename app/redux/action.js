export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_AGE = "SET_USER_AGE";
export const SET_USER_SEX = "SET_USER_SEX";
export const SET_USER_CP = "SET_USER_CP";
export const SET_USER_TRESTBPS = "SET_USER_TRESTBPS";
export const SET_USER_CHOL = "SET_USER_CHOL";
export const SET_USER_FBS = "SET_USER_FBS";
export const SET_USER_RESTECG = "SET_USER_RESTECG";
export const SET_USER_THALACH = "SET_USER_THALACH";
export const SET_USER_EXANG = "SET_USER_EXANG";
export const SET_USER_LDPEAK = "SET_USER_LDPEAK";
export const SET_USER_SLOPE = "SET_USER_SLOPE";
export const SET_USER_CA = "SET_USER_CA";
export const SET_USER_THAL = "SET_USER_THAL";

export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name
    });
}
export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age
    });
}
export const setSex = sex => dispatch => {
    dispatch({
        type: SET_USER_SEX,
        payload: sex
    });
}
export const setCp = cp => dispatch => {
    dispatch({
        type: SET_USER_CP,
        payload: cp
    });
}
export const setTrestbps = trestbps => dispatch => {
    dispatch({
        type: SET_USER_TRESTBPS,
        payload: trestbps
    });
}
export const setChol = chol => dispatch => {
    dispatch({
        type: SET_USER_CHOL,
        payload: chol
    });
}
export const setFbs = fbs => dispatch => {
    dispatch({
        type: SET_USER_FBS,
        payload: fbs
    });
}
export const setRestecg = restecg => dispatch => {
    dispatch({
        type: SET_USER_RESTECG,
        payload: restecg
    });
}
export const setThalach = thalach => dispatch => {
    dispatch({
        type: SET_USER_THALACH,
        payload: thalach
    });
}
export const setExang = exang => dispatch => {
    dispatch({
        type: SET_USER_EXANG,
        payload: exang
    });
}
export const setLdpeak = ldpeak => dispatch => {
    dispatch({
        type: SET_USER_LDPEAK,
        payload: ldpeak
    });
}
export const setSlope = slope => dispatch => {
    dispatch({
        type: SET_USER_SLOPE,
        payload: slope
    });
}
export const setCa = ca => dispatch => {
    dispatch({
        type: SET_USER_CA,
        payload: ca
    });
}
export const setThal = thal => dispatch => {
    dispatch({
        type: SET_USER_THAL,
        payload: thal
    });
}