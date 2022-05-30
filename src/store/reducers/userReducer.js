import { API } from '../../api/api'

const SET_USERS = 'SET_USERS'
const SET_IS_LOADING = 'SET_IS_LOADING'
const SET_ERROR = 'SET_ERROR'
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const SET_POSTS = 'SET_POSTS'
const SET_CURRENT_POST = 'SET_CURRENT_POST'
const SET_COMMENTS = 'SET_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'

const initialState = {
  userData: [],
  postData: [],
  isLoading: false,
  error: '',
  currentUser: {},
  currentPost: {},
  comments: [],
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        userData: action.users,
        isLoading: false,
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
        isLoading: false,
      }
    case SET_POSTS:
      return {
        ...state,
        postData: action.posts,
        isLoading: false,
      }
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.post,
        isLoading: false,
      }
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
        isLoading: false,
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.comment],
      }
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading }
    case SET_ERROR:
      return { ...state, error: action.error, isLoading: false }
    default:
      return state
  }
}

export const setUsers = users => ({ type: SET_USERS, users })
export const setError = error => ({ type: SET_ERROR, error })
export const setIsLoading = isLoading => ({ type: SET_IS_LOADING, isLoading })
export const setCurrentUser = user => ({ type: SET_CURRENT_USER, user })
export const setPosts = posts => ({ type: SET_POSTS, posts })
export const setCurrentPost = post => ({ type: SET_CURRENT_POST, post })
export const setComments = comments => ({ type: SET_COMMENTS, comments })
export const addComment = comment => ({ type: ADD_COMMENT, comment })

export const fetchUsers = () => async dispatch => {
  dispatch(setIsLoading(true))
  try {
    const users = await API.getUsers()
    dispatch(setUsers(users))
  } catch (error) {
    dispatch(setError('ошибка при получении пользователей'))
  }
}

export const fetchCurrentUser = id => async dispatch => {
  try {
    const user = await API.getCurrentUser(id)
    dispatch(setCurrentUser(user))
  } catch (error) {
    dispatch(setError('ошибка при получении текущего пользователя пользователя'))
  }
}

export const fetchPosts = userId => async dispatch => {
  try {
    dispatch(setIsLoading(true))
    const posts = await API.getPosts(userId)
    dispatch(setPosts(posts))
  } catch (error) {
    dispatch(setError('ошибка при получении постов'))
  }
}
export const fetchCurrentPost = id => async dispatch => {
  try {
    const post = await API.getCurrentPost(id)
    dispatch(setCurrentPost(post))
  } catch (error) {
    dispatch(setError('ошибка при получении поста пользователя'))
  }
}

export const fetchComments = postId => async dispatch => {
  try {
    dispatch(setIsLoading(true))
    const comments = await API.getComments(postId)
    dispatch(setComments(comments))
  } catch (error) {
    dispatch(setError('ошибка при получении комментариев'))
  }
}

export const postComment = comment => async dispatch => {
  try {
    await API.sendComment(comment)
    dispatch(addComment(comment))
  } catch (error) {
    dispatch(setError('ошибка при отправке данных'))
  }
}
