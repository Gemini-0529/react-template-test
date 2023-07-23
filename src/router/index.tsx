import { createBrowserRouter, Navigate } from 'react-router-dom'
import React, { lazy } from 'react'
const Layout = lazy(() => import('@/views/Layout/index'))
const Home = lazy(() => import('@/views/Home/index'))
const My = lazy(() => import('@/views/My/My'))

const NotFound = lazy(() => import('@/views/NotFound/index'))

const LoadingComponent = ( Comp:JSX.Element ) => (
  <React.Suspense fallback={<div>loading...</div>}>
    {Comp}
  </React.Suspense>
)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home"/>
  },
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/home',
        element: LoadingComponent(<Home/>)
      },
      {
        path: '/my',
        element: LoadingComponent(<My/>)
      }
    ]
  },
  {
    path: '*',
    element: LoadingComponent(<NotFound/>)
  }
])

export default router