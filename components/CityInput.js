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

export default function CityInput(){
    return (
        <>
        Your city<Input placeholder="type your city "></Input>
        </>
    )
}