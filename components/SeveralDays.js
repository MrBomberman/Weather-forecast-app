import { useRef,useEffect, useState  } from "react";
import styled from "styled-components";
import SeveralDaysTemperature from "./SeveralDaysTemperature";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

const Container = styled.div`
    flex-direction: column;
`
ChartJS.register(LineElement, PointElement, LinearScale,CategoryScale, Title);

export default function SeveralDays({data, onChangeActive, activeDay}){

    // const tempratureLine = useRef();

    console.log(data)

    // console.log(tempratureLine.current)
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }],
    });
        
        // useEffect(() => {
        //   const chart = chartRef.current;
        
        //   if (chart) {
        //     setChartData({
        //       datasets: [{
        //           backgroundColor: createBackgroundGradient(chart.ctx),
        //           // ...
        //       }]
        //     });
        //   }
        // }, []);

    return (
        <>  
        <Container>
        <h4 style={{textAlign: 'center'}}>Temperature</h4>
        {/* <canvas id="myChart" width="400" height="100" ref={tempratureLine}></canvas> */}
        <Line data={chartData} />
            <SeveralDaysTemperature data={data} onChangeActive={onChangeActive} activeDay={activeDay}/>
        </Container>
        </>
    )
}