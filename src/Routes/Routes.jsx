
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: fetch(()=>'category.json')
            },
            {
                path: "dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    },
]);

export default routes