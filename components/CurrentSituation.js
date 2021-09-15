import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    font-size: 18px;
   `

export default function CurrentSituation(){
    return (
        <>
            <Container>
                <div>
                    <p>time</p>
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