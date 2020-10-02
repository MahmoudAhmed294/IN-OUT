import styled from "styled-components";
import React from "react";

export const Card = styled.div`

    flex: 0 0 ${props => props.bar === "bar" ? "100%" : "29.333333%"};
    max-width: ${props => props.bar === "bar" ? "100%" : "29.333333%"};
    
    position: relative;
    display: flex;
    flex-direction: ${props => props.bar === "bar" ? "row" : "column"};
;
    background-color: #F2F2F2;
    padding: ${props => props.bar === "bar" ? "0" : "10px"};
;
    margin:10px 15px
`
export const Imgbody = styled.div`
    width: ${props => props.bar === "bar" ? "40%" : "70%"};
    margin:  ${props => props.bar === "bar" ? "0 0" : "20px auto"};
    padding:  ${props => props.bar === "bar" ? "20px" : "0"};
height:250px;
`

export const Img = styled.img`
    width:  ${props => props.bar === "bar" ? "80%" : "100%"};
    flex-shrink: 0;
        height: 100%;

    

    
    `
export const Cardbody = styled.div`
padding:${props => props.bar === "bar" ? "20px" : "10px"};
${props => props.bar === "bar" ? "display:flex; flex-direction: column;" : ""};
    `

export const BtnLove = styled.button`
    background-color: transparent;
    border: none;
    margin-left: ${props => props.bar === "bar" ? "-57px" : "auto"};
    ${props => props.bar === "bar" ? "position: absolute;" : ""};
    ${props => props.bar === "bar" ? "bottom:43px;" : ""};
    ${props => props.bar === "bar" ? "left: 47%;" : ""};
    display:     ${props => props.bar === "bar" ? "flex" : "block"};
    color: #BE012F;
    font-size: 25px;
    margin-right: 10px;
    &:focus{
    outline: none;
}
`
export const DetalisContent = styled.div`
    ${props => props.bar === "bar" ? "display: flex; flex-direction: column-reverse;" : ""};

`
export const PriceContent = styled.div`
    ${props => props.bar === "bar" ? "display: flex; flex-direction: row-reverse;" : ""};
    ${props => props.bar === "bar" ? "align-items: baseline;" : ""};

`
export const H5 = styled.h5`
display:inline;
margin-top:15px;
`
export const DEl = styled.del`
color:#ACABAB;
    ${props => props.bar === "bar" ? "margin-left:10px" : ""};
h6{
margin-bottom:0;
}
`
export const PriceSpan = styled.span`
color:#BE012F;
`
// left: 45%;
// margin-left: -45px;

export const BtnADD = styled.button`
z-index:400;
    position: absolute;
    bottom: ${props => props.bar === "bar" ? "90px" : "20px"};

${props => props.bar === "bar" ? "left: 47%; margin-left: -47px; " : "    right: 20px;"};

color: #fff;
background-color: #00A550;
border: #00A550 1px solid;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    
`