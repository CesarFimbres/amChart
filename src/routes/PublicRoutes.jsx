import { PublicLayout } from "./PublicLoyout";
import { PUBLIC_PATH } from "./pathway";

import { About } from "../pages/About";
import { Blog, loaderBlogs } from "../pages/Blog";
import { ChartAndDescription } from "../pages/ChartAndDescription";
import { ErrorPage } from "../pages/ErrorPage";
import Contact from "../pages/Contact";

const { HOME, ABOUT, BLOG, CHART } = PUBLIC_PATH;

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
			path: CHART,
			element: <ChartAndDescription />,
		},
		{
			path: BLOG,
			element: <Blog />,
			loader: loaderBlogs,
		},
		{
			path: "contacts/:contactId",
			element: <Contact />,
		},
	],
};
