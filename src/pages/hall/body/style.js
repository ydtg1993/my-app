import styled from 'styled-components';

export const Section = styled.div`
   overflow-y: scroll;
   padding: 5px;
    &::-webkit-scrollbar {
        width: 0;
    }
    
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0);
    }
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;
  scrollbar-color: transparent;
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
    grid-template-rows: auto 60px;
    grid-template-columns:100%;
    background: #faefde;
 
    @media (min-width: 1024px) {
        width: 1024px;
    }
`;

