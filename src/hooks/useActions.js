import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchUsers,
  fetchPosts,
  setIsLoading,
  setError,
  setCurrentUser,
  setCurrentPost,
  fetchComments,
  postComment,
  fetchCurrentUser,
  fetchCurrentPost,
} from './../store/reducers/userReducer'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(
    {
      fetchUsers,
      fetchPosts,
      setIsLoading,
      setError,
      setCurrentUser,
      setCurrentPost,
      fetchComments,
      postComment,
      fetchCurrentUser,
      fetchCurrentPost,
    },
    dispatch
  )
}
