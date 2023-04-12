import './App.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './Routes/Routes/Router'
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={ router }></RouterProvider>
      <Toaster/>
    </div>
    </>
  )
}

export default App
