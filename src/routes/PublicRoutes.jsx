import { createBrowserRouter } from "react-router-dom";
import { LayoutPublic } from "../layout/LayoutPublic";
import { Blog, loaderBlogs } from "../pages/Blog";
import { ChartAndDescription } from "../pages/ChartAndDescription";
import Contact from "../pages/Contact";

import { ErrorPage } from "../pages/error-page";
import { Report } from "../pages/Report";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutPublic />,
		errorElement: <ErrorPage />,
        children:[
            // {
            //     path: "/",
            //     element: <Home />
            // },
            {
                path: "/chart",
                element: <ChartAndDescription />
            },
            {
                path: "/blog",
                element: <Blog />,
                loader: loaderBlogs,
            },
            {
                path: "contacts/:contactId",
                element: <Contact />,
              },
        ],
	},
	{
		path: "/report",
		element: <Report />,
	},
]);
