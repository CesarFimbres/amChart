import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { Hero } from "../components/Hero";
import { Sidebar } from "../components/sidebar";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

import "../css/outlet.css"

export const PublicLayout = () => {
	const [isLoading, setIsLoading] = useState(true);

	const { isAuthenticated } = useAuthContext();
	console.log(`isAuthenticated:>> ${isAuthenticated}`);

	return (
		<>
			{isAuthenticated}
			<Navbar />
			<Hero />
			{isLoading && (
				<main>
					<Sidebar />
					<div id="outlet">
						<Outlet />
					</div>
				</main>
			)}

			<footer>Pie de pagina</footer>
		</>
	);
};
