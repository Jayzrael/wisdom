import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './routes/home.jsx';
import ErrorPage from './error-page.jsx';
import Pricing from './routes/pricing.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Contact from './routes/Contact.jsx';

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
    // errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: (
      <>
        <ScrollToTop />
        <Contact />
      </>
    ),
    // errorElement: <ErrorPage />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
