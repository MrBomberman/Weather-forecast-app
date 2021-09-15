import styled from "styled-components";

const Container = styled.div`
    flex-direction: column;
`

export default function SeveralDays(){

    return (
        <>  
        <Container>
        <h4>Temperature</h4>
            <canvas></canvas>
        </Container>
        </>
    )
}