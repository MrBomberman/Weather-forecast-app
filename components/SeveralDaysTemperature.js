import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    > div {
        padding: 10px;
    }
`



function SeveralDaysTemperature({data}) {


    let secondDay = data === null ? 'Loading...' : formatDate(data.list[8].dt_txt);
    let thirdDay = data === null ? 'Loading...' : formatDate(data.list[16].dt_txt);
    let fourthDay = data === null ? 'Loading...' : formatDate(data.list[24].dt_txt);
    let fifthDay = data === null ? 'Loading...' : formatDate(data.list[32].dt_txt);
    
    function formatDate(date) {
        let formatedDate = new Date(date).toString().slice(4,10)

        return formatedDate
    }

    return (
        <Container>
            <div>{secondDay}</div>
            <div>{thirdDay}</div>
            <div>{fourthDay}</div>
            <div>{fifthDay}</div>
        </Container>
    )
}

export default SeveralDaysTemperature