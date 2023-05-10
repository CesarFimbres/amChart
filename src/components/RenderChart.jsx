import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import "../css/chart.css";
import { graphData } from "../routes/helpers/graphData";

export default function RenderChart({ data }) {
	// This code will only run one time
	useLayoutEffect(() => {
		const root = am5.Root.new("chartdiv");

		root.setThemes([am5themes_Animated.new(root)]);

		const chart = root.container.children.push(
			am5xy.XYChart.new(root, {
				layout: root.verticalLayout,
				panX: true,
				panY: true,
				pinchZoomX: true,
				wheelX: "panX",
				wheelY: "zoomX",
			}),
		);

		// Add cursor
		// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
		const cursor = chart.set(
			"cursor",
			am5xy.XYCursor.new(root, {
				behavior: "none",
			}),
		);
		cursor.lineY.set("visible", false);

		// Generate random data
		const date = new Date();
		date.setHours(0, 0, 0, 0);
		let value = 100;

		function generateData() {
			value = Math.round(Math.random() * 10 - 5 + value);
			am5.time.add(date, "day", 1);
			return {
				date: date.getTime(),
				value: value,
			};
		}

		function generateDatas(count) {
			const data = [];
			for (let i = 0; i < count; ++i) {
				data.push(generateData());
			}
			return data;
		}

		// Create axes
		// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
		const xAxis = chart.xAxes.push(
			am5xy.DateAxis.new(root, {
				maxDeviation: 0.2,
				baseInterval: {
					timeUnit: "minute",
					count: 1,
				},
				renderer: am5xy.AxisRendererX.new(root, {}),
				tooltip: am5.Tooltip.new(root, {}),
			}),
		);

		const yAxis = chart.yAxes.push(
			am5xy.ValueAxis.new(root, {
				renderer: am5xy.AxisRendererY.new(root, {}),
			}),
		);

		// Add series
		// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
		const series = chart.series.push(
			am5xy.LineSeries.new(root, {
				name: "Series",
				stroke: am5.color(0xE67E22),
				strokeWidth: 1,
				xAxis: xAxis,
				yAxis: yAxis,
				valueYField: "value",
				valueXField: "date",
				tooltip: am5.Tooltip.new(root, {
					labelText: "{valueY}",
				}),
			}),
		);

		// Add scrollbar
		// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
		chart.set(
			"scrollbarX",
			am5.Scrollbar.new(root, {
				orientation: "horizontal",
			}),
		);

		// Set data
		// const data = generateDatas(20);
		const data = graphData;
		console.log(data);
		series.data.setAll(data);

		// Make stuff animate on load
		// https://www.amcharts.com/docs/v5/concepts/animations/
		series.appear(1000);
		chart.appear(1000, 100);

		return () => {
			root.dispose();
		};
	}, []);

	return <div id="chartdiv" />;
}
