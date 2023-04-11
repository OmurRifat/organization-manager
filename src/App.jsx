import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes/Router'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={ router }></RouterProvider>
    </div>
  )
}

export default App
