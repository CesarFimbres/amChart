import { createBrowserRouter } from "react-router-dom";

import { PRIVATE_ROUTES } from "./PrivateRoutes";
import { PUBLIC_ROUTES } from "./PublicRoutes";
import { Report } from "../pages/Report";
import { PUBLIC_PATH } from "./pathway";


export const router = createBrowserRouter([
	PUBLIC_ROUTES,
	PRIVATE_ROUTES,
	{ path: PUBLIC_PATH.REPORT, element: <Report /> },
]);
