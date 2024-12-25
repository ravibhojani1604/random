import './App.css';
import Demo from './Demo'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import Json from './json'
import Callback from './callback';
import Hoc from './hoc';
import RootLayout from './RootLayout';
import {action as NewPostAction} from './hoc'  
import List from './list';

function App() {

  const router = createBrowserRouter([
    {
      path: "/demo",
      element: <Demo />
    },
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/json",
          element: <Json />,
        },
      ],
    },
    {
      path: "/callback",
      element: <Callback />,
    },
    {
      path:"/list",
      element:<List/>
    },
    {
      path: "/hoc/:id",
      element: <Hoc />,
      loader: HocLoader,
      action:NewPostAction
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

async function HocLoader(data) {
  const {id} = data.params;
  const product = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((r) => r.json())
  return product
}