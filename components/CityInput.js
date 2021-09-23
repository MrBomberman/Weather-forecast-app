import { useState } from "react";
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
`

export default function CityInput({setCity}){

    return (
        <>
        Your city<Input onInput={(e) => setCity(e.target.value)} placeholder="type your city "></Input>
        </>
    )
}