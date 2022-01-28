import { Line, getElementAtEvent } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import {useState ,useEffect} from 'react';
import {useRef} from 'react';

ChartJS.register(LineElement, PointElement, LinearScale,CategoryScale, Title);

export default function LineChart({activeDay, data}){
    const lineRef = useRef();
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    // console.log(activeDay)
    let index = 0;
    const arrOfHours = [];
    const arrOfTemprature = [];
    for (let i = 0; i < data.list.length; i++){ // calculate index to find start point of active day to show 
        // the forecast every 6 hours for this day
        if(data.list[i].dt == +activeDay){
            index = index + i
        }
    }
    let mainIteration = index + 8; // main index plus 8 points to show forecast for a whole day
    let currentTime = new Date((activeDay - 10800) * 1000).getHours();

    // console.log(currentTime, +activeDay)
    // one index = 3 hours
    while(index <= mainIteration) {
        if(index == mainIteration - 8){
            currentTime = currentTime
            arrOfHours.push(currentTime+':00')
            arrOfTemprature.push(Math.round(data.list[index].main.feels_like - 273.15)) // convert from kelvin to celcius
            index = index + 2
        }
        currentTime = currentTime + 6 ; // every 6 hours
        currentTime = currentTime >= 24 ? currentTime - 24 : currentTime // checks if 24 hours - convert to 0:00
        arrOfHours.push(currentTime+':00')
        arrOfTemprature.push(Math.round(data.list[index].main.feels_like - 273.15))
        index = index + 2
    }


    // console.log(arrOfHours, arrOfTemprature)

    const options = {
        onClick: (e) => {
           console.log(e)
        }
    }

    const [chartData, setChartData] = useState({
        labels: arrOfHours,
        backgroundColor: '#fff',
        datasets: [{
        label: 'temprature',
        data: arrOfTemprature,
        backgroundColor: '#96ADC8',
        borderColor: [
            '#4c86a8'
        ],
        borderWidth: 4,
        
        }],
    });


    useEffect(() => { // checks if active day was changed - it changes the chart line
        setChartData({
            labels: arrOfHours,
            datasets: [{
            label: 'temprature',
            data: arrOfTemprature,
            backgroundColor: '#96ADC8',
            borderColor: [
                '#4c86a8'
            ],
            borderWidth: 4,
            }],
        })
    }, [activeDay])

    // chartData.datasets[0].data.push(arrOfTemprature)

    return (
        <div>
             <Line className='lineChart' data={chartData} options={options} ref={lineRef}/>
        </div>
    )
}