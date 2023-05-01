import "../css/hero.css";
import electricalTechnician from "../assets/images/electrical-technician.jpeg";

export const Hero = () => {
	return (
		<div id="hero" className="bg-gradient-dark">
			<div className="description">
				<h1>Código de red</h1>
				{/* <h3>Reporte simplificado.</h3> */}
				<p>
					El Código de Red es el principal instrumento en materia de
					confiabilidad emitido por la Comisión Reguladora de Energía (CRE);
					corresponde a las disposiciones administrativas de carácter general
					que establecen los criterios de eficiencia, calidad, confiabilidad,
					continuidad, seguridad y sustentabilidad del Sistema Eléctrico
					Nacional (SEN)¹³. El Código de Red establece los requerimientos
					técnicos mínimos para el desarrollo eficiente de los procesos de
					planeación, medición, control operativo, control físico, acceso y uso
					de la infraestructura eléctrica
				</p>
        <a className="btn-primary" href="https://energiahoy.com/2020/10/09/que-es-el-codigo-de-red-y-por-que-debemos-cumplirlo/" target="blanck">Leeer más</a>
			</div>
			<div className="image">
				<img src={electricalTechnician} alt="Electrical technician" />
			</div>
		</div>
	);
};
