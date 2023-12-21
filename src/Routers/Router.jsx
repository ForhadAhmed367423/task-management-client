import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Register/Signup";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/DashComp/Profile";
import Create from "../Pages/Dashboard/DashComp/Create";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<SignUp/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/about',
          element:<About/>
        },
        
      ],
      
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'profile',
          element: <Profile/>
        },
        {
          path:'create',
          element:<Create/>
        }
        
       
  
      ]
    }
  ]);

  export default router;