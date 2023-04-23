import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="container ">
			<div className="dark-gradient">
				<div className="bg-image">
					<h1>
						<Link to={"/"}>Home</Link>
					</h1>
					<Link to={"/report"}>📒</Link>
					<Link to={"/blog"}>📚</Link>
				</div>
			</div>
		</div>
	);
};
