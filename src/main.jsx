import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import NewGames from './Pages/NewGames.jsx'
import Trending from './Pages/Trending.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import SingleGame from './Pages/SingleGame.jsx'


const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/newGames", element: <NewGames/>},
  {path: "/trending" , element: <Trending/>},
  {path: "*" , element: <NotFoundPage/>},
  {path: "/singleGame/:id" , element: <SingleGame/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
