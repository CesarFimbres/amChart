import RenderChart from '../components/RenderChart'

import "../css/chart.css"

export const Chart = () => {
  return (
    <div id="chart">
      <h1>Current RMS 1/2 (1-cyc) Avg(A)</h1>
      <RenderChart />
    </div>
  )
}