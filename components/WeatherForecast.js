import styled from "styled-components"
import CityInput from "./CityInput"
import CurrentSituation from "./CurrentSituation"
import SeveralDays from "./SeveralDays"


export default function WeatherForecast(){
    const Container = styled.div`
    padding: 10px;
    width: 800px;
    height: 600px;
    background-color: #b4d2e7;
    border-radius: 14px;
    box-shadow: -3px -2px 36px -7px rgba(0,0,0,0.75);

    @media only screen and (max-width: 820px){
    width: 350px;
    }
`

    return (
            <Container>
                 <h1 style={{textAlign: 'center'}}>Weather forecast</h1>   
                 <CityInput/>
                 <div style={{display: 'flex', justifyContent: 'space-between'}}>
                 <CurrentSituation/>
                 <SeveralDays/>
                 </div>
            </Container>
    )
}