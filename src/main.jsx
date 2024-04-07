import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import News from "./components/News.jsx"

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route exact path='/' element={<News key={"general"} pagesize={6} country={"in"} category={"general"} />} />
      <Route exact path='/business' element={<News key={"business"} pagesize={6} country={"in"} category={"business"} />} />
      <Route exact path='/entertainment' element={<News key={"entertainment"} pagesize={6} country={"in"} category={"entertainment"} />} />
      <Route exact path='/sports' element={<News key={"sports"} pagesize={6} country={"in"} category={"sports"} />} />
      <Route exact path='/science' element={<News key={"science"} pagesize={6} country={"in"} category={"science"} />} />
      <Route exact path='/technology' element={<News key={"technology"} pagesize={6} country={"in"} category={"technology"} />} />
      <Route exact path='/health' element={<News key={"health"} pagesize={6} country={"in"} category={"health"} />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
