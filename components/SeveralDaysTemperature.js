import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    > div {
        padding: 10px;
    }
`



function SeveralDaysTemperature({data}) {


    let secondDay = data === null ? 'Loading...' : formatDate(data.list[8].dt_txt,data.list[8].weather[0].main, data.list[8].main.humidity);
    let thirdDay = data === null ? 'Loading...' : formatDate(data.list[16].dt_txt, data.list[16].weather[0].main, data.list[16].main.humidity);
    let fourthDay = data === null ? 'Loading...' : formatDate(data.list[24].dt_txt, data.list[24].weather[0].main, data.list[24].main.humidity);
    let fifthDay = data === null ? 'Loading...' : formatDate(data.list[32].dt_txt, data.list[32].weather[0].main, data.list[32].main.humidity);
    
    function formatDate(date, situation, humidity) {
        let formatedDate = new Date(date).toString().slice(4,10)

        return <div>
            <p>{formatedDate}</p>
            <div>{situation}</div>
            <div>
                <div>Humidity</div>
                <div>{humidity + '%'}</div>
            </div>
        </div>
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