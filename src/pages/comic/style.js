import styled from 'styled-components';
import {gif_finn, img_back} from "../../resource";

export const TopPanel = styled.div`
    display:flex;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    background:white;
    padding:5px 10px 5px 10px;
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
    grid-template-rows: 32px auto;
    grid-template-columns:100%;
    background: #faefde;
 
    @media (min-width: 1024px) {
        width: 1024px;
    }
`;

export const BackIcon = styled.img.attrs({
    src:`${img_back}`
})`
    width:24px;
`;

export const HomeIcon = styled.img.attrs({
    src:`${gif_finn}`
})`
    width:30px;
`;

export const TitleBox = styled.div`
    width: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    & > span{
        font-weight: 400;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
