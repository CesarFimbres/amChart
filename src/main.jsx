import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/routes";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import  AuthContextProvider  from "./context/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<RouterProvider router={router} />
		</AuthContextProvider>
	</React.StrictMode>,
);
