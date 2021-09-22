import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    font-size: 18px;
   `

export default function CurrentSituation(){

    const [fullDate, setFullDate] = useState('')


    function dateNow() {
        let currentDate = new Date();

        let localDate = currentDate.toDateString()
        let localTime = currentDate.toLocaleTimeString()

        setFullDate(localTime + ' ' + localDate)

        console.log(fullDate)
    }

    setInterval(dateNow ,1000)


    return (
        <>
            <Container>
                <div>
                    <p>{fullDate}</p>
                </div>
                <div>
                    <div>Cloudy weather</div>
                </div>
                <div>
                    <div>Humidity</div>
                    <div>Wind</div>
                </div>
            </Container>
        </>
    )

}