import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// Routes
import {Login} from './pages/Login/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: 'register',
    element: <h1>register</h1>
  }
])

function App() {


  return (
    <>
      <div>
      {/* TODO: Aspi se hace los comentarios en react */}
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App
