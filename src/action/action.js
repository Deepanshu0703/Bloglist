import axios from 'axios';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const SEARCH_POSTS = 'SEARCH_POSTS';
export const SORT_POSTS = 'SORT_POSTS';

const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  };
};

const fetchPostsSuccess = posts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
};

const fetchPostsFailure = error => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
};

export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostsRequest());
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchPostsFailure(errorMsg));
      });
  };
};

export const addPost = post => {
  return {
    type: ADD_POST,
    payload: post
  };
};

export const deletePost = id => {
  return {
    type: DELETE_POST,
    payload: id
  };
};

export const searchPosts = searchTerm => {
  return {
    type: SEARCH_POSTS,
    payload: searchTerm
  };
};

export const sortPosts = sortType => {
  return {
    type: SORT_POSTS,
    payload: sortType
  };
};
