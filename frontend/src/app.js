import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Main_page from './components/Main_page';
import Skin_Analysis from './components/Skin_Analysis';
import Next1 from './components/Next1';
import Next2 from './components/Next2';
import Next3 from './components/Next3';
import Analysing from './components/Analysing';
import Result from './components/Result';
import Cart from './components/cart';
import Product from './components/Product';
import AIAnalyzer from './components/AIAnalyzer';
import { CartProvider } from './components/CartContext';
import SignIn from './components/SignIn';




// Layout with header/footer and outlet for nested routes
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

// Router configuration
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Main_page /> },
      { path: 'skinAnalysis', element: <Skin_Analysis /> },
      { path: 'next1', element: <Next1 /> },
      { path: 'next2', element: <Next2 /> },
      { path: 'next3', element: <Next3 /> },
      { path: 'analysing', element: <Analysing /> },
      { path: 'result', element: <Result /> },
      { path: 'cart', element: <Cart /> },
      { path: 'product', element: <Product /> },
      { path: 'AIanalyze', element: <AIAnalyzer /> },
      {
  path: "signin",
  element: <SignIn />
},
{
  path: 'register',
  element: <Register />
}
    ]
  }
]);

// Render with CartProvider wrapped around RouterProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <RouterProvider router={appRouter} />
  </CartProvider>
);
