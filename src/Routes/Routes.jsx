
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Products from "../components/Products";
import DetailsPage from "../Pages/DetailsPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('../category.json'),
                children: [

                    {
                        path: "/",
                        element: <Products></Products>,
                        loader: () => fetch('../products.json'),
                    },
                    {
                        path: "/category/:category",
                        element: <Products></Products>,
                        loader: () => fetch('../products.json'),
                    }]

            },
            {
                path: "dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "detailspage/:product_title",
                element: <DetailsPage></DetailsPage>,
                loader: () => fetch('../products.json'),
            },

        ]
    },
]);

export default routes