import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import myCreatedRoute from './Router/Route';


export const GlobalContext = createContext(null)
export const GlobalContext2 = createContext(null)

const userId = "191266"

const userInfo = {
  name: "Monika",
  id: "66",
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <GlobalContext.Provider value={userId}>
      <GlobalContext2.Provider value={userId}>

      <RouterProvider router={myCreatedRoute} />
      </GlobalContext2.Provider>

    </GlobalContext.Provider>

  </React.StrictMode>,
)
