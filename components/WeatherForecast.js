import { useState, useEffect } from "react"
import styled from "styled-components"
import CityInput from "./CityInput"
import CurrentSituation from "./CurrentSituation"
import SeveralDays from "./SeveralDays"
import fetchData from "../utils"

const Container = styled.div`
margin: 200px auto;
overflow-y: auto;
padding: 16px;
width: 800px;
height: 600px;
background-color: #b4d2e7;
border-radius: 14px;
box-shadow: -3px -2px 36px -7px rgba(0,0,0,0.75);

@media only screen and (max-width: 820px){
margin: 40px auto;
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

export default function WeatherForecast({props}){

    const [city, setCity] = useState('London')
    const [data, setData] = useState()
    const [activeDay, setActiveDay] = useState(props.data.list[0].dt) // current date as default is active day
    // console.log(props.data)





    return (
            <Container>
                 <h1 style={{textAlign: 'center'}}>Weather forecast</h1>   
                    <CityInput setCity={setCity} city={city}/>
                 <CurrentInfo>
                    <CurrentSituation city={city} data={props.data} activeDay={activeDay}/>
                    <SeveralDays data={props.data} onChangeActive={(value) => setActiveDay(value.currentTarget.id)}
                    activeDay={activeDay}/>
                 </CurrentInfo>
            </Container>
    )
}



