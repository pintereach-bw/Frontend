import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post("https://pintreachbackend.herokuapp.com/api/auth/register", creds, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://pintreachbackend.herokuapp.com/api/auth/login", creds, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      localStorage.setItem("token", res.data.token);
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.id });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const getArticles = () => dispatch => {
    dispatch({ type: FETCHING })
    axios
        .get('https://pintreachbackend.herokuapp.com/api/articles/', {
            headers: { Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            dispatch({ type: SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FAILURE, payload: err})
        })
}



export const ADD_ARTICLE_START = "ADD_ARTICLE_START"
export const ADD_ARTICLE_SUCCESS = "ADD_ARTICLE_SUCCESS"
export const ADD_ARTICLE_FAILURE = "ADD_ARTICLE_FAILURE"

export const addArticle = (article) => dispatch => {
    dispatch({ type: ADD_ARTICLE_START })
    // const token = localStorage.getItem("token")
    // const headers = { 
    //     "content-type": "application/json", Authorization: localStorage.getItem("token")
    //  }
    axios
        .post('https://pintreachbackend.herokuapp.com/api/articles/', article, {
            headers: { Authorization: localStorage.getItem("token")}
        })
        .then(res => {
            console.log(res.data)
            dispatch({ type: ADD_ARTICLE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: ADD_ARTICLE_FAILURE, payload: err})
        })
}

