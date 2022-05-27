import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from './hooks/useActions'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { ListOfUsers } from './pages/ListOfUsersPage'
import { ListOfPosts } from './pages/ListOfPostsPage'
import { PostPage } from './pages/PostPage'
import { UserPage } from './pages/UserPage'
import { NotFound } from './pages/NotFoundPage'

function App() {
  const { userData, currentUser } = useSelector(state => state.users)

  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ListOfUsers users={userData} />} />
          <Route path='user/:id' element={<UserPage user={currentUser} />} />
          <Route path='posts/:userId' element={<ListOfPosts />} />
          <Route path='post/:id' element={<PostPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
