import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
    margin-left: 5px;
    font-size: 18px;
    padding: 5px;
    border-radius: 5px;
    border: 0px;
    &:hover {
        background-color: #ebebeb;
    }
@media only screen and (max-width: 560px){
        font-size: 16px; 
        }
`
const Button = styled.button`
    margin-left: 10px;
    font-size: 18px;
    padding: 5px;
    border-radius: 5px;
    transition-duration: .5s;
    :hover {
        color: #fff;
        background-color: #95b8d1;
    }
@media only screen and (max-width: 560px){
        font-size: 14px; 
        }
`

export default function CityInput({setCity, city, setData, errorMsg, setErorrMsg}){

    const refCity = useRef();

    function handleKeyDown (event, city) {
        if (event.key === 'Enter') {
            city = refCity.current.value;
            setCity(city)
            fetchData(city)
        }
        if(event.key === 'Space'){

        }
      }


    function handleInput(e){
        const firstElem = e.target.value[0];
        if(firstElem === ' '){
            e.target.value = ''
        }
        
    }

    function fetchData(city) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2061b3a9d510a4c514ba1b661d445337`)
        .then(res => res.json())
        .then(result => {
            if(result.cod == '200') {
                setErorrMsg('')
                setData(result)
            } else {
                setErorrMsg('Type your city correctly')
                setCity('')
                setData(undefined)
            }
        })
    }


    return (
        <>
        Your city<div>
        <Input ref={refCity} 
        onInput={(e) => handleInput(e)}
        placeholder="type your city " 
        onKeyDown={(e) => handleKeyDown(e, city)} ></Input>
        <Button onClick={() => {
            city = refCity.current.value;
            setCity(city)
            fetchData(city)
        }}>Find</Button>
        </div>
        <div>{errorMsg}</div>
        </>
    )
}