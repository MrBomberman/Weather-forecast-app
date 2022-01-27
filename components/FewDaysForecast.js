import styled from "styled-components";
import Image from 'next/image'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    margin-top: 10px;
    > div {
        transition-duration: 0.6s;
        text-align: center;
        padding: 9px;
        cursor: pointer;
    }
    @media only screen and (max-width: 820px){
        grid-template-columns: 2fr 2fr
    }

`

const theme = {
    main: 'orange'
}



function FewDaysForecast({data, onChangeActive, activeDay}) {

    let today = formatDayWeather(data.list[0].dt_txt,data.list[0].weather[0].main, data.list[0].main.humidity);
    let secondDay = formatDayWeather(data.list[8].dt_txt,data.list[8].weather[0].main, data.list[8].main.humidity);
    let thirdDay = formatDayWeather(data.list[16].dt_txt, data.list[16].weather[0].main, data.list[16].main.humidity);
    let fourthDay = formatDayWeather(data.list[24].dt_txt, data.list[24].weather[0].main, data.list[24].main.humidity);

    function formatDayWeather(date, state, humidity) {
        let arr1 = []

        let formatedDate = ''

        if (date === data.list[0].dt_txt) {
            formatedDate = 'Today'
        } else {
            formatedDate = new Date(date).toString().slice(4,10)
        }

        switch(state){
            case('Clouds') : 
            state = <Image src='https://cdn-icons.flaticon.com/png/512/3222/premium/3222791.png?token=exp=1643286802~hmac=39739637c9e86d4f4b81fd82f944c168'
            width={50}
            height={50}
            layout="fixed"
            alt='image'/>
            break;
            case('Rain') : 
            state = <Image src='https://cdn-icons.flaticon.com/png/512/1585/premium/1585379.png?token=exp=1643292861~hmac=5fb76791a00cf58936695a83438e6677
            width={50}
            height={50}
            layout="fixed"
            alt='image'/>
            break;
            case('Snow') : 
            state = <Image src='https://cdn-icons.flaticon.com/png/512/2465/premium/2465979.png?token=exp=1643292806~hmac=54fbc504fee48f812de037997079d392'
            width={50}
            height={50}
            layout="fixed"
            alt='image'/>
            break;
            case('Clear') : 
            state = <Image src='https://cdn-icons.flaticon.com/png/512/3222/premium/3222794.png?token=exp=1643292766~hmac=c2bee347a54e38974b899d43caa9ac17'
            width={50}
            height={50}
            layout="fixed"
            alt='image'/>
            break;
            default :
            state = state
            break;
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