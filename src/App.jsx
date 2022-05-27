import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { ListOfUsers } from './pages/ListOfUsersPage'
import { ListOfPosts } from './pages/ListOfPostsPage'
import { PostPage } from './pages/PostPage'
import { UserPage } from './pages/UserPage'
import { NotFound } from './pages/NotFoundPage'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ListOfUsers />} />
          <Route path='user/:id' element={<UserPage />} />
          <Route path='posts/:userId' element={<ListOfPosts />} />
          <Route path='post/:id' element={<PostPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
