import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import Hero from './component/Hero/Hero.jsx';
import Navbar from './component/Navbar/Navbar.jsx';
import SignUp from './component/SignUp/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "login",
    element: <Hero/>,
  },
  {
    path: "signup",
    element: <SignUp/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
     <RouterProvider router={router} />
  </React.StrictMode>,
)
