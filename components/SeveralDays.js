import { useRef,useEffect, useState  } from "react";
import styled from "styled-components";
import FewDaysForecast from "./FewDaysForecast";
import LineChart from "./lineChart";

const Container = styled.div`
    flex-direction: column;
`

export default function SeveralDays({data, onChangeActive, activeDay}){

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
        <h4 style={{textAlign: 'center', marginTop: 0}}>Temperature</h4>
        <LineChart activeDay={activeDay} data={data}/>
            <FewDaysForecast data={data} onChangeActive={onChangeActive} activeDay={activeDay}/>
        </Container>
        </>
    )
}