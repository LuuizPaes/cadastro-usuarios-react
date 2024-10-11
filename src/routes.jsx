import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";

const router = createBrowserRouter([
    {
        path: '/', //endereco que fica o navegador
        element: <Home />
    },

    {
        path: '/lista-de-usuarios',
        element: <ListUsers />
    }


])

export default router