import { Logout } from "../components/Logout";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePrivate } from "../pages/HomePrivate";
import { Profile } from "../components/Profile"
import { PrivateLayout } from "./PrivateLayout";
import { PRIVATE_PATH } from "./pathway";

const { LOGOUT, PRIVATE, PROFILE } = PRIVATE_PATH;

export const PRIVATE_ROUTES = {
	path: PRIVATE,
	element: <PrivateLayout />,
	errorElement: <ErrorPage />,
	children: [
		{
			path: PRIVATE,
			element: <HomePrivate />,
		},
		{
			path: LOGOUT,
			element: <Logout />,
		},
		{
			path: PROFILE,
			element: <Profile />,
		},
	],
};