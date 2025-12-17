import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewGames from './Pages/NewGames.jsx'
import Trending from './Pages/Trending.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/newGames", element: <NewGames/>},
  {path: "/trending" , element: <Trending/>},
  {path: "*" , element: <NotFoundPage/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
