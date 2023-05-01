import { Link } from "react-router-dom";
import login from "../assets/images/login.svg";
import { useAuthContext } from "../context/authContext";


export const Home = () => {

	const { isAuthenticated } = useAuthContext();
	console.log(`Home:>> ${isAuthenticated}`);

	return (
		<div className="container ">
			<div className="dark-gradient">
				<div className="bg-image">
					<h1>
						<Link to={"/"}>Home</Link>
					</h1>
					<Link to={"/report"}>📒</Link>
					<Link to={"/blogs"}>📚</Link>
					<Link to={"/login"}>
						<img src={login} alt="Login icon" />
					</Link>
				</div>
			</div>
		</div>
	);
};
