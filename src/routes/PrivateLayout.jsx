import { useState } from "react";
import { Outlet } from "react-router-dom";

export const PrivateLayout = () => {

	const [isLogin, setIsLogin] = useState(true);

	return (
		<>
			{isLogin && (
				<main>
					<Outlet />
				</main>
			)}

			<footer>Pagina privada para uso bajo registro</footer>
		</>
	);
};
