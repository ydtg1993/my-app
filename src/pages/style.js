import styled, { keyframes } from 'styled-components';
import {gif_finn, img_back} from "../resource";
import {NavigationTab} from "./hall/navigation/style";

export const ScrollType = styled.div`
    overflow-y: scroll;
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

export const HallStruct = styled.div`
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

export const DetailStruct = styled.div`
    height: 100%;  
    width: 100%;
    position: absolute;  
    top: 0px;  
    bottom: 0px;   
    background-size: cover;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    background: #faefde;
 
    @media (min-width: 1024px) {
        width: 1024px;
    }
`;

export const TopNavPanel = styled.div`
    display:flex;
    height: 40px;
    align-items: center;
    justify-content: space-around;
    background:white;
    padding:0 10px 0 10px;
    
    & > a {
        display: flex;
        align-items: center;
        height: 32px;
    }
`;

export const BackIcon = styled.img.attrs({
    src:`${img_back}`
})`
    width:24px;
`;

export const HomeIcon = styled(NavigationTab)`
    transform: scale(0.42);
    background-position: -10px -10px;
`;

