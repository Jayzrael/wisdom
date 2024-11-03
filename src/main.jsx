import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css'
import Home from './routes/home.jsx';
import ErrorPage from './error-page.jsx';
import Pricing from './routes/pricing.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Contact from './routes/Contact.jsx';
import SignUp from './routes/SignUp.jsx';
import SignIn from './routes/signin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/pricing",
    element: (
      <>
        <ScrollToTop />
        <Pricing />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <ScrollToTop />
        <Contact />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <ScrollToTop />
        <SignUp />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <ScrollToTop />
        <SignIn />
      </>
    ),
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
