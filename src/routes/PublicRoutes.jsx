import { PublicLayout } from "./PublicLoyout";
import { PUBLIC_PATH } from "./pathway";

import { About } from "../pages/About";
import { Blog, loaderBlogs } from "../pages/Blog";
import { ErrorPage } from "../pages/ErrorPage";
import { Login } from "../components/Login"
import Contact from "../pages/Contact";
import { Chart } from "../pages/Chart";

const { HOME, ABOUT, BLOG, LOGIN, CHART } = PUBLIC_PATH;

export const PUBLIC_ROUTES = {
	path: HOME,
	element: <PublicLayout />,
	errorElement: <ErrorPage />,
	children: [
		{
			path: ABOUT,
			element: <About />,
		},
		{
			path: BLOG,
			element: <Blog />,
			loader: loaderBlogs,
		},
		{
			path: CHART,
			element: <Chart />,
		},
		{
			path: LOGIN,
			element: <Login />,
		},
		{
			path: "contacts/:contactId",
			element: <Contact />,
		},
	],
};
