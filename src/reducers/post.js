import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    ADD_POST,
    DELETE_POST,
    SEARCH_POSTS,
    SORT_POSTS
  } from '../action/action';
  
  const initialState = {
    loading: false,
    posts: [],
    error: '',
    searchTerm: '',
    sortType: ''
  };
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_POSTS_SUCCESS:
        return {
          loading: false,
          posts: action.payload,
          error: '',
          searchTerm: '',
          sortType: ''
        };
      case FETCH_POSTS_FAILURE:
        return {
          loading: false,
          posts: [],
          error: action.payload,
          searchTerm: '',
          sortType: ''
        };
      case ADD_POST:
        return {
          ...state,
          posts: [...state.posts, action.payload],
          searchTerm: ''
        };
      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.payload),
          searchTerm: ''
        };
      case SEARCH_POSTS:
        return {
          ...state,
          searchTerm: action.payload,
          sortType: ''
        };
      case SORT_POSTS:
        return {
          ...state,
          sortType: action.payload,
          searchTerm: ''
        };
      default:
        return state;
    }
  };
  
  export default postsReducer;
  