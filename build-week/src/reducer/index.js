import {
  REGISTER_START,
  REGISTER_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCHING,
  SUCCESS,
  FAILURE,
  ADD_ARTICLE_START,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAILURE
} from "../actions";

const intialState = {
  LoggingIn: false,
  isLoggedIn: false,

  articles: [],
  isFetching: false,
  fetchingArticle: false,
  addArticle: false,
  deleteArticle: false,
  updateArticle: false
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        isLoggedIn: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOGIN_START:
      return {
        ...state,
        LoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        LoggingIn: false,
        isLoggedIn: true,
        token: action.payload
      };

      case FETCHING:
            return {
                ...state,
                isFetching: true,
            }
        case SUCCESS:
            return {
                ...state,
                // isFetching: false,
                articles: action.payload,
                isFetching: false
            }
        case FAILURE:
            return {
                ...state,
                isFetching: false,
                err: action.payload
            }

            case ADD_ARTICLE_START:
            return {
                ...state,
                addArticle: true,
            }
        case ADD_ARTICLE_SUCCESS:
            return {
                ...state,
                addArticle: false,
                isLoggedIn: true,
                articles: action.payload
            }
        case ADD_ARTICLE_FAILURE:
            return {
                ...state,
                isFetching: false,
                err: action.payload
            }

    default:
      return state;
  }
};

export default reducer;
