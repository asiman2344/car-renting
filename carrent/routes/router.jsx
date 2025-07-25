import { createBrowserRouter } from "react-router-dom";
import App from '../src/App'
import CarDetails from '../components/carDetails'
import Home from '../src/Home'
import ListCar from '../components/listCar'
import MyBooks from '../components/myBooks'
import Profile from '../components/profile'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/car-details/:id",
                element: <CarDetails />
            },
            {
                path:"list-cars",
                element: <ListCar />
            },
            {
                path: "/my-books",
                element: <MyBooks />
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    }
])

export default router;