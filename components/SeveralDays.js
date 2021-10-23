import styled from "styled-components";
import SeveralDaysTemperature from "./SeveralDaysTemperature";

const Container = styled.div`
    flex-direction: column;
`

export default function SeveralDays({data, onChangeActive, activeDay}){

    return (
        <>  
        <Container>
        <h4 style={{textAlign: 'center'}}>Temperature</h4>
            <canvas></canvas>

            <SeveralDaysTemperature data={data} onChangeActive={onChangeActive} activeDay={activeDay}/>
        </Container>
        </>
    )
}