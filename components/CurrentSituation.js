import { useEffect, useState } from "react";
import styled from "styled-components";
import CurrentTime from "./CurrentTime";
import Image from 'next/image'

const Container = styled.div`
    text-align: center;
    font-size: 18px;
   `

const AdditionalParams = styled.div`
    display: flex;
    padding: 10px;
    > div {
        padding: 10px
    }
`

const WeatherState = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export default function CurrentSituation({data}){

    const [weather, setMainWeather] = useState(null)

    let mainCurrentWeather = data === null ? 'Loading...' :  data.list[0].weather[0].main;
    let currentHumidity = data === null ? 'Loading...' : data.list[0].main.humidity + '%';
    let currentWind = data === null ? 'Loading...' : data.list[0].wind.speed + 'km/j'

    let temprature = Math.round(data.list[0].main.temp - 273.15);

    switch(mainCurrentWeather){
        case('Clouds') : 
        mainCurrentWeather = <Image src='/../public/images/cloud.png'
        width={100}
        height={100}
        layout="fixed"
        alt='image'/>
        break;
        case('Rain') : 
        mainCurrentWeather = <Image src='/../public/images/slight-rain.png'
        width={100}
        height={100}
        layout="fixed"
        alt='image'/>
        break;
        case('Snow') : 
        mainCurrentWeather = <Image src='/../public/images/snowfall.png'
        width={100}
        height={100}
        layout="fixed"
        alt='image'/>
        break;
        case('Clear') : 
        mainCurrentWeather = <Image src='/../public/images/clear-sky.png'
        width={100}
        height={100}
        layout="fixed"
        alt='image'/>
        break;
        default :
        mainCurrentWeather = mainCurrentWeather
        break;
    }

    return (
        <>
            <Container>
                <CurrentTime/>
                <h4>{`Now`}</h4>
                <WeatherState>
                    <div>{mainCurrentWeather}</div>
                    <div style={{}}>{temprature}C&#176;</div>
                </WeatherState>
                <AdditionalParams>
                    <div>Humidity: <span>{currentHumidity}</span></div>
                    <div>Wind: <span>{currentWind}</span></div>
                </AdditionalParams>
            </Container>
        </>
    )

}