import { createBrowserRouter } from "react-router-dom";
import CarsList from '../components/carsList'
import App from '../src/App'
import CarDetails from '../components/carDetails'
import Home from '../src/Home'

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
                path: "/cars",
                element: <CarsList />
            },
            {
                path: "/car-details",
                element: <CarDetails />
            }
        ]
    }
])

export default router;