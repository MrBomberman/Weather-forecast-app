import { useRef,useEffect, useState  } from "react";
import styled from "styled-components";
import FewDaysForecast from "./FewDaysForecast";
import LineChart from "./lineChart";

const Container = styled.div`
    flex-direction: column;
    font-size: 18px;
`

export default function SeveralDaysBlock({data, onChangeActive, activeDay, city}){

    // const tempratureLine = useRef();

    // console.log(data)
    // if(data == null){
    //     data = []
    // }

    // console.log(tempratureLine.current)
    const chartRef = useRef(null);
    const labels = {count: 3}
        

    return (
        <>  
        <Container>
        <h4 style={{textAlign: 'center', marginTop: 0}}>Temperature C&#176;</h4>
        <LineChart activeDay={activeDay} data={data} city={city}/>
            <FewDaysForecast data={data} onChangeActive={onChangeActive} activeDay={activeDay}/>
        </Container>
        </>
    )
}