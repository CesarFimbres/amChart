import { NavLink } from "react-router-dom";

import "./sidebar.css";
import contact from "../assets/images/contact.svg";
import document from "../assets/images/document.svg";
import follow from "../assets/images/follow.svg";
import home from "../assets/images/home.svg";
import lineMenu from "../assets/images/line-menu.svg";
import chartLine from "../assets/images/chart-line.svg";

export const Sidebar = () => {
	return (
		<aside className="sidebar">
			<div className="sidebar-dot_menu">
				<div className="sidebar-dot red" />
				<div className="sidebar-dot yellow" />
				<div className="sidebar-dot green" />
			</div>

			<div className="sidebar-title_wrapper ">
				<img className="sidebar-title_icon" src={lineMenu} alt="grid menu" />
				<h1 className="sidebar-title">Código de red</h1>
			</div>

			{/* <Link className="sidebar-a" to={"/report"}>
				Reporte

			</Link> */}
			<div className="sidebar-item_wrapper">
				<NavLink className="sidebar-a" to={"/"}>
					<div className="sidebar-item_icon">
						<img src={home} alt="Home icon" />
					</div>
					<div className="sidebar-item_tag">Home</div>
				</NavLink>
			</div>

			<div className="sidebar-item_wrapper activeLink">
				<NavLink className="sidebar-a" to={"/chart"}>
					<div className="sidebar-item_icon">
						<img src={chartLine} alt="Document icon" />
					</div>
					<div className="sidebar-item_tag">Chart</div>
				</NavLink>
			</div>

			<div className="sidebar-item_wrapper">
				<NavLink className="sidebar-a" to={"/blog"}>
					<div className="sidebar-item_icon">B</div>
					<div className="sidebar-item_tag">Blog</div>
				</NavLink>
			</div>

			<div className="sidebar-item_wrapper">
				<NavLink className="sidebar-a" to={"/contacts/13"}>
					<div className="sidebar-item_icon">
						<img src={contact} alt="Contact icon" />
					</div>
					<div className="sidebar-item_tag">Contacto 13</div>
				</NavLink>
			</div>

			<div className="sidebar-item_wrapper accent">
				<NavLink className="sidebar-a" to={"/report"}>
					<div className="sidebar-item_icon">
						<img src={follow} alt="Follow report template" />
					</div>
					<div className="sidebar-item_tag">Reporte simplificado</div>
				</NavLink>
			</div>

		</aside>
	);
};
