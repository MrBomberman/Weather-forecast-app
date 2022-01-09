import { useState, useEffect } from "react"
import styled from "styled-components"
import CityInput from "./CityInput"
import CurrentSituation from "./CurrentSituation"
import SeveralDays from "./SeveralDays"
import fetchData from "../utils"

const Container = styled.div`
padding: 10px;
width: 800px;
height: 600px;
background-color: #b4d2e7;
border-radius: 14px;
box-shadow: -3px -2px 36px -7px rgba(0,0,0,0.75);

@media only screen and (max-width: 820px){
width: 340px;
}
`
const CurrentInfo = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 820px){
    display: block;
}
`

export default function WeatherForecast(){

    const [city, setCity] = useState('London')
    const [data, setData] = useState(null)
    const [activeDay, setActiveDay] = useState(null)

    useEffect(() => {

        fetchData().then(data => setData(data));
        
    },[])


    console.log(city)
    console.log(activeDay)


    return (
            <Container>
                 <h1 style={{textAlign: 'center'}}>Weather forecast</h1>   
                    <CityInput setCity={setCity}/>
                 <CurrentInfo>
                    <CurrentSituation city={city} data={data} activeDay={activeDay}/>
                    <SeveralDays data={data} onChangeActive={(value) => setActiveDay(value)} activeDay={activeDay}/>
                 </CurrentInfo>
            </Container>
    )
}