import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './Routes/Routes/Router'
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
   
  ]);
  return (
    <div className="mx-auto">
      <RouterProvider router={ router }></RouterProvider>
    </div>
  )
}

export default App
