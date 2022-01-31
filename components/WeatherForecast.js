import { useState, useEffect } from "react"
import styled from "styled-components"
import CityInput from "./CityInput"
import CurrentSituation from "./CurrentSituation"
import SeveralDaysBlock from "./SeveralDaysBlock"
import fetchData from "../utils"

const Container = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
overflow-y: auto;
padding: 16px;
width: 800px;
height: 600px;
backdrop-filter: blur(14px);
border-radius: 14px;
box-shadow: -3px -2px 36px -7px rgba(0,0,0,0.75);

@media only screen and (max-width: 820px){
    width: 380px;
}
@media only screen and (max-width: 560px){
    width: 320px; 
    }
@media only screen and (max-height: 668px){
    height: 500px;
    }
`
const CurrentInfo = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 820px){
    display: block;
}
`

export default function WeatherForecast({data, currentLocation}){

    const [city, setCity] = useState('')
    const [activeDay, setActiveDay] = useState() // current date as default is active day

    useEffect(() => {
        if(data != undefined){
            setActiveDay(data.list[0].dt)
        }
        if(currentLocation != undefined){
            setCity(currentLocation)
        }
    }, [currentLocation])



    return (
            <Container>
                 <h1 style={{textAlign: 'center'}}>Weather forecast</h1>   
                    <CityInput setCity={setCity} city={city}/>
                 <CurrentInfo>
                    <CurrentSituation city={city} data={data}  />
                    <SeveralDaysBlock data={data}
                         onChangeActive={(value) => setActiveDay(value.currentTarget.id)}
                         activeDay={activeDay}
                    />
                 </CurrentInfo>
            </Container>
    )
}



