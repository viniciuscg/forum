import Login from './Pages/login';
import Home from './Pages/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './Pages/profile/Index';
import Search from './Pages/search';
import { UserProvider } from './Context/userContext';
import PostDetails from './Pages/postDetails';
import Signup from './Pages/signup';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "/sign-up",
      element: <Signup/>
    },
    {
      path: "/sign-in",
      element: <Login/>
    },
    {
      path: "/profile/:id",
      element: <Profile />
    },
    {
      path: "/search",
      element: <Search />
    },
    {
      path: "/details/:postId",
      element: <PostDetails />
    },
  ])

  return (
    <div className='min-h-screen bg-gray-900'>
      <UserProvider>
        <RouterProvider router={router}/>
      </UserProvider>
    </div>
  )
}

export default App
