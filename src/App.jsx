import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './Routes/Routes/Router'

function App() {
  return (
    <div className="mx-auto">
      <RouterProvider router={ router }></RouterProvider>
    </div>
  )
}

export default App
