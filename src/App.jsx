import './App.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './Routes/Routes/Router'
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from './Pages/Dashboard/LoanApply/Loader';
import 'react-photo-view/dist/react-photo-view.css';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate data loading delay
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(delay);
    }
  }, []);


  return (
    <>
      <div className="max-w-[1440px] mx-auto">

      {isLoading ? <Loader /> : (
        <div className="home-content">
         <Provider store={store}> 
      <RouterProvider router={ router }></RouterProvider>
      </Provider>
      <Toaster/>
        </div>
      )}
    </div>
    </>
  )
}

export default App
