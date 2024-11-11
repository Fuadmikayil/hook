import {createBrowserRouter} from "react-router-dom"
import HomePage from '../pages/homePage'
import ContactPage from '../pages/contactPage'
export const routes = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/contact",
      element:<ContactPage/>
    }
  ])