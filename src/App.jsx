import './App.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './Routes/Routes/Router'
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
      <Provider store={store}> 
      <RouterProvider router={ router }></RouterProvider>
      </Provider>
      <Toaster/>
    </div>
    </>
  )
}

export default App
