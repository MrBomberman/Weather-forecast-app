import { useEffect, useState } from "react";
import styled from "styled-components";
import CurrentTime from "./CurrentTime";

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

export default function CurrentSituation({data}){

    // const [weather, setMainWeather] = useState(null)

    const mainCurrentWeather = data === null ? 'Loading...' :  data.list[0].weather[0].main;
    const currentHumidity = data === null ? 'Loading...' : data.list[0].main.humidity + '%';
    const currentWind = data === null ? 'Loading...' : data.list[0].wind.speed + 'km/j'
    console.log(data)


    return (
        <>
            <Container>
                <CurrentTime/>
                <div>
                    <div>{mainCurrentWeather}</div>
                </div>
                <AdditionalParams>
                    <div>Humidity: {currentHumidity}</div>
                    <div>Wind: {currentWind}</div>
                </AdditionalParams>
            </Container>
        </>
    )

}