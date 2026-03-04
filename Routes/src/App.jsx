import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Menu from './components/Menu';
import Guest from './components/Guest';
import User from './components/User';
import Product from './components/Product';

function Layout() {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/product-list">ProductList</Link> |{" "}
        <Link to="/menu">Menu</Link>
      </nav>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/product-list",
        element: <ProductList />
      },
      {
        path: "/menu",
        element: <Menu />,
        children: [
          {
            path: "user",
            element: <User />
          },
          {
            path: "guest",
            element: <Guest />
          },
          {
            path: "product",
            element: <Product />
          }
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
