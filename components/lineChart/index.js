import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import {useState ,useEffect} from 'react';

ChartJS.register(LineElement, PointElement, LinearScale,CategoryScale, Title);

export default function LineChart({activeDay, data}){
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    // console.log(activeDay)
    let index = 0;
    // console.log(index)
    const arrOfHours = [];
    const arrOfTemprature = [];
    for (let i = 0; i < data.list.length; i++){ // calculate index to find start point of active day to show 
        // the forecast every 3 hours for this day
        if(data.list[i].dt == +activeDay){
            index = index + i
        }
    }
    let mainIteration = index + 8; // main index plus 8 points to show forecast fot a whole day
    let currentTime = new Date((activeDay - 10800) * 1000).getHours();

    // console.log(currentTime, +activeDay)
    while(index <= mainIteration) {
        if(index == mainIteration - 8){
            currentTime = currentTime
            arrOfHours.push(currentTime)
            arrOfTemprature.push(Math.round(data.list[index].main.temp - 273.15))
            index = index + 2
        }
        currentTime = currentTime + 3 ; // every 3 hours
        currentTime = currentTime == 24 ? 0 : currentTime // checks if 24 hours - convert to 0:00
        arrOfHours.push(currentTime)
        arrOfTemprature.push(Math.round(data.list[index].main.temp - 273.15))
        index = index + 2
    }


    // console.log(arrOfHours, arrOfTemprature)

    const [chartData, setChartData] = useState({
        labels: arrOfHours,
        datasets: [{
        label: 'temprature',
        data: arrOfTemprature,
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
        borderWidth: 1,
        
        }],
    });

    useEffect(() => { // checks if active day was changed - it changes the chart line
        setChartData({
            labels: arrOfHours,
            datasets: [{
            label: 'temprature',
            data: arrOfTemprature,
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
            borderWidth: 1,
            
            }],
        })
    }, [activeDay])

    // chartData.datasets[0].data.push(arrOfTemprature)

    return (
        <Line data={chartData} />
    )
}