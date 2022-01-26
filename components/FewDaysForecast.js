import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    > div {
        padding: 10px;
        cursor: pointer;
    }
`

const theme = {
    main: 'orange'
}



function FewDaysForecast({index ,data, onChangeActive, activeDay}) {
    let allDays = []

    // for(let i = 0; i < 24; i+ 4){
    //    let arr = formatDayWeather(data.list[i].dt_txt,data.list[i].weather[i].main, data.list[i].main.humidity)
    //     allDays.push(arr)
    // }
    // console.log(allDays)

    let today = data === null ? 'Loading...' : formatDayWeather(data.list[0].dt_txt,data.list[0].weather[0].main, data.list[0].main.humidity);
    let secondDay = data === null ? 'Loading...' : formatDayWeather(data.list[8].dt_txt,data.list[8].weather[0].main, data.list[8].main.humidity);
    let thirdDay = data === null ? 'Loading...' : formatDayWeather(data.list[16].dt_txt, data.list[16].weather[0].main, data.list[16].main.humidity);
    let fourthDay = data === null ? 'Loading...' : formatDayWeather(data.list[24].dt_txt, data.list[24].weather[0].main, data.list[24].main.humidity);

    function formatDayWeather(date, state, humidity) {
        let arr1 = []

        let formatedDate = ''

        if (date === data.list[0].dt_txt) {
            formatedDate = 'Today'
        } else {
            formatedDate = new Date(date).toString().slice(4,10)
        }

        return (<div id={formatedDate}>
            <p>{formatedDate}</p>
            <div>{state}</div>
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



    return data === null ? 'Loading...' : 
        <Container>
            <div id={data.list[0].dt} onClick={onChangeActive}
            className={activeDay == data.list[0].dt ? 'active' : '' }>{today}</div>
            <div id={data.list[8].dt} onClick={onChangeActive}
             className={activeDay == data.list[8].dt ? 'active' : '' }>{secondDay}</div>
            <div id={data.list[16].dt} onClick={onChangeActive}
             className={activeDay == data.list[16].dt ? 'active' : '' }>{thirdDay}</div>
            <div id={data.list[24].dt} onClick={onChangeActive}
             className={activeDay == data.list[24].dt ? 'active' : '' }>{fourthDay}</div>
        </Container>
    
}

export default FewDaysForecast