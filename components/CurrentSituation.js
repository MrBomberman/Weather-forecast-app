import { useEffect, useState } from "react";
import styled from "styled-components";
import CurrentTime from "./CurrentTime";
import Image from 'next/image';
import cloud from '../public/images/cloud.png';
import clearSky from '../public/images/clear-sky.png';
import snow from '../public/images/snowfall.png';
import rain from '../public/images/slight-rain.png';

const Container = styled.div`
    text-align: center;
    font-size: 22px;
   `

const AdditionalParams = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    > div {
        padding: 10px
    }
`

const WeatherState = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const CurrentState = styled.span`
    font-weight: 550;
`

export default function CurrentSituation({data}){


    const [weather, setMainWeather] = useState(null)

    let mainCurrentWeather = data.list[0].weather[0].main;
    let currentHumidity = data.list[0].main.humidity + '%';
    let currentWind = data.list[0].wind.speed + 'km/j'

    let temprature = Math.round(data.list[0].main.feels_like - 273.15);

    switch(mainCurrentWeather){
        case('Clouds') : 
        mainCurrentWeather = <Image src={cloud}
        width={100}
        height={100}
        layout="fixed"
        alt='image'/>
        break;
        case('Rain') : 
        mainCurrentWeather = <Image src={rain}
        width={100}
        height={100}
        layout="fixed"
        alt='image'/>
        break;
        case('Snow') : 
        mainCurrentWeather = <Image src={snow}
        width={100}
        height={100}
        layout="fixed"
        alt='image'/>
        break;
        case('Clear') : 
        mainCurrentWeather = <Image src={clearSky}
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
                    <div style={{paddingLeft: 10, fontWeight: 600}}>{temprature}C&#176;</div>
                </WeatherState>
                <AdditionalParams>
                    <div>Humidity: <CurrentState>{currentHumidity}</CurrentState></div>
                    <div>Wind: <CurrentState>{currentWind}</CurrentState></div>
                </AdditionalParams>
            </Container>
        </>
    )

}