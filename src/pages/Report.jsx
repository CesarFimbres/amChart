import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";

import "../css/report.css";

import filePDF from "../assets/download-pdf.svg";
import dalle from "../assets/dalle.png";

const downloadPdf = () => {
	const pdf = new jsPDF("p", "pt", "letter");
	pdf.html(document.getElementById("report"), {
		callback: function () {
			pdf.save("pagina.pdf");
		},
	});
};

const data = {
	title: " paginas de Cesar",
	paragraph:
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, placeat, laborum distinctio perferendis et optio voluptates accusamus voluptas nostrum dolorum consequuntur. Doloremque pariatur mollitia officiis suscipit numquam voluptatum, fuga voluptates autem repellendus quidem dignissimos veritatis, quibusdam adipisci. Architecto odio praesentium natus, soluta fuga labore obcaecati. Ipsum quam quibusdam pariatur. Sit! ",
};

export const Report = (props) => {

	console.log(props)
	return (
		<div className="container">
			<button className="btn" onClick={downloadPdf}>
				<img className="download-pdf" src={filePDF} alt="pdf" />
			</button>
			<div id="report">
				<section className="bg-crimson">
					<h1>{data.title}</h1>
					<img className="image" src={dalle} alt="dalle" />
					<p>Image generated with Dall-e AI</p>
					<br />
					<p>{data.paragraph}</p>
				</section>
				<div className="bg-crimson">
					<h2>HTML Table</h2>

					<table className="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">First</th>
								<th scope="col">Last</th>
								<th scope="col">Handle</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td colSpan="2">Larry the Bird</td>
								<td>@twitter</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="bg-crimson">
					<h1>Grid Layout</h1>
					<p>This grid layout contains six columns and three rows:</p>
					<div className="grid-container">
						<div className="item1">Header</div>
						<div className="item2">Menu</div>
						<div className="item3">Main</div>
						<div className="item4">Right</div>
						<div className="item5">Footer</div>
					</div>
				</div>
				<div className="bg-crimson">
					<h1>Hello 3</h1>
				</div>
				<div className="bg-crimson">
					<h1>Hello 4</h1>
				</div>
				<div className="bg-crimson">
					<h1>Hello 5</h1>
				</div>
				<h1>Report</h1>
				<a
					href="https://www.flaticon.com/free-icons/download"
					title="download icons"
				>
					Download icons created by Iconjam - Flaticon
				</a>
				<Link to={"/"}>Home</Link>
			</div>
		</div>
	);
};
