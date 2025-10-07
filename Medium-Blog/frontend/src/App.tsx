import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { SignIn } from './pages/SignIn'
import { Publish } from './pages/Publish'
import { HomePage } from './pages/HomePage'
import { useEffect } from 'react'
import axios from 'axios'
import { BACKEND_URL } from './config'
import { useDispatch } from 'react-redux'
import { type AppDispatch } from './store'
import { setUser } from './store/userSlice'


function App() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return
    axios.get(`${BACKEND_URL}/api/v1/user`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      dispatch(setUser({ name: res.data?.name, token }))
    }).catch(() => {
    })
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/publish' element={<Publish />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
