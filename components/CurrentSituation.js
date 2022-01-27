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
        mainCurrentWeather = <Image src='https://cdn-icons.flaticon.com/png/512/3222/premium/3222791.png?token=exp=1643286802~hmac=39739637c9e86d4f4b81fd82f944c168'
        width={100}
        height={100}
        layout="fixed"
        alt='image'/>
        break;
        case('Rain') : 
        mainCurrentWeather = <Image src='https://cdn-icons.flaticon.com/png/512/1585/premium/1585379.png?token=exp=1643292861~hmac=5fb76791a00cf58936695a83438e6677'
        width={100}
        height={100}
        layout="fixed"
        alt='image'/>
        break;
        case('Snow') : 
        mainCurrentWeather = <Image src='https://cdn-icons.flaticon.com/png/512/2465/premium/2465979.png?token=exp=1643292806~hmac=54fbc504fee48f812de037997079d392'
        width={100}
        height={100}
        layout="fixed"
        alt='image'/>
        break;
        case('Clear') : 
        mainCurrentWeather = <Image src='https://cdn-icons.flaticon.com/png/512/3222/premium/3222794.png?token=exp=1643292766~hmac=c2bee347a54e38974b899d43caa9ac17'
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