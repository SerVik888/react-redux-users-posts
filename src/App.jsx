import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from './hooks/useActions'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { fetchUsers } from './store/reducers/userReducer'
import { ListOfUsers } from './pages/ListOfUsersPage'
import { ListOfPosts } from './pages/ListOfPostsPage'
import { PostPage } from './pages/PostPage'
import { UserPage } from './pages/UserPage'
import { NotFound } from './pages/NotFoundPage'

function App() {
  const { userData, isLoading, error, currentUser, currentPost, postData, comments } = useSelector(state => state.users)
  // const dispatch = useDispatch()
  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])
  // console.log(error)
  // console.log(isLoading)

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ListOfUsers users={userData} />} />
          <Route path='/user/:id' element={<UserPage user={currentUser} />} />
          <Route path='posts/:userId' element={<ListOfPosts />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
