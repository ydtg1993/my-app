import styled from 'styled-components';

export const Section = styled.div`
   overflow-y: scroll;
   padding: 5px;
`;

export const BodyWrapper = styled.div`
    height: 100%;  
    width: 100%;  
    position: absolute;  
    top: 0px;  
    bottom: 0px;   
    background-size: cover;
    overflow:hidden;
    display: grid;
    grid-template-rows: auto 65px;
    grid-template-columns:100%;
`;

