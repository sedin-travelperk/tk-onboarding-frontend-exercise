import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-items: center;
`;

const Input = ({label, value, onChange}) => {
    return (
        <Container>
            <label>{label}</label>
            <input defaultValue={value} onChange={onChange}/>
        </Container>
    )
}


export default Input
