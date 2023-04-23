import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar";
import { Home } from "../pages/Home";

export const LayoutPublic = () => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<>
			<Home />
			{isLoading && (
				<main>
					<Sidebar />
					<Outlet className="p16"/>
				</main>
			)}

			<footer>Pie de pagina</footer>
		</>
	);
};
