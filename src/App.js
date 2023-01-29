import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { Home, About, Contact, NoPage, AllGames, GameDetails } from './Pages'
import './App.scss'

const Layout = () => {
  return (
    <div className='app'>
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/allgames",
        element: <AllGames />
      },
      {
        path: "/game-details/:id",
        element: <GameDetails />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "*",
        element: <NoPage />
      },

    ]
  },
  {
    path: "/about",
    element: <About />
  },


])



function App() {
  return (

    <RouterProvider router={router}></RouterProvider>

  )
}

export default App