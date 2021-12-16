import React from "react";
import styled from "styled-components";

const InputField = styled.input``;
const InputLabel = styled.label``;

const Input = ({label, value, onChange}) => {
    return (
        <div>
            <InputLabel>{label}</InputLabel>
            <InputField defaultValue={value} onChange={onChange}/>
        </div>
    )
}


export default Input
