import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    > div {
        padding: 10px;
    }
`

const theme = {
    main: 'orange'
}



function SeveralDaysTemperature({data, onChangeActive, activeDay}) {

    let today = data === null ? 'Loading...' : formatDate(data.list[0].dt_txt,data.list[0].weather[0].main, data.list[0].main.humidity);
    let secondDay = data === null ? 'Loading...' : formatDate(data.list[8].dt_txt,data.list[8].weather[0].main, data.list[8].main.humidity);
    let thirdDay = data === null ? 'Loading...' : formatDate(data.list[16].dt_txt, data.list[16].weather[0].main, data.list[16].main.humidity);
    let fourthDay = data === null ? 'Loading...' : formatDate(data.list[24].dt_txt, data.list[24].weather[0].main, data.list[24].main.humidity);
    
    function formatDate(date, situation, humidity) {

        let formatedDate = ''

        if (date === data.list[0].dt_txt) {
            formatedDate = 'Today'
        } else {
            formatedDate = new Date(date).toString().slice(4,10)
        }

        return (<div>
            <p>{formatedDate}</p>
            <div>{situation}</div>
            <div>
                <div>Humidity</div>
                <div>{humidity + '%'}</div>
            </div>
        </div>
        )
    }

    // function handleClick(e) {
    //     if(e.currentTarget === activeDay){
    //         e.currentTarget.classList.add('active')
    //     } else {
    //         e.currentTarget.classList.remove('active')
    //     }
        
    // }
    
    // let list = [today, secondDay, thirdDay, fourthDay]
    // list.map(l => {
    //     console.log(l)
    // })


    return (
        <Container>
            <div>{today}</div>
            <div>{secondDay}</div>
            <div>{thirdDay}</div>
            <div>{fourthDay}</div>
        </Container>
    )
}

export default SeveralDaysTemperature