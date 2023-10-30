import styled from 'styled-components';
import {fadeIn, fadeOut, ScrollType} from "../style";
import {dog_last, dog_next, dog_sleep, img_back} from "../../resource";
import {NavigationTab} from "../hall/navigation/style";

export const ReaderStruct = styled.div`
    height: 100%;  
    width: 100%;
    position: absolute;  
    top: 0px;  
    bottom: 0px;   
    background-size: cover;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    background: white;
    
    @media (min-width: 1024px) {
        width: 1024px;
    }
`;

export const ChapterImageList = styled(ScrollType)`
    
`;

export const ImageBox = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    background-image: url(${dog_sleep});
    background-repeat: no-repeat;
    background-position: center center; 
    & > span {
        width:100%;
    }
    & img {
        width:100%;
    }
`;

export const ToolbarPanel = styled.div`
    position: fixed;
    width: 520px;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${fadeIn} .2s ease-in-out;
    border: 1px solid rgb(0 0 0 / 78%);
    border-radius: 3px;
`;

export const NavPanel = styled.div`
    display:flex;
    height: 25px;
    align-items: center;
    justify-content: space-around;
    background: rgb(0 0 0 / 80%);
    color: white;
    border-radius: 3px 3px 0 0;
    & h1{
        font-weight: 300;
        font-size: 12px;
    }
`;

export const BtnPanel = styled.div`
    display:flex;
    height: 46px;
    align-items: center;
    background: #fff6e8db;
    justify-content: space-around;
    border-radius: 0 0 3px 3px;
        & > a {
        display: flex;
        align-items: center;
        height: 32px;
        width:45px;
    }
`;

const Icon = styled.img`
    width:35px;
    padding: 0 4px;
`;

export const Btn = styled.div`
    cursor: pointer;
    display:flex;
`;

export const HomeIcon = styled(NavigationTab)`
    transform: scale(0.48);
    background-position: -20px -10px;
`;

export const BackIcon = styled(Icon).attrs({
    src:`${img_back}`
})`
    width:25px;
`;

export const LastIcon = styled(Icon).attrs({
    src:`${dog_last}`
})``;

export const NextIcon = styled(Icon).attrs({
    src:`${dog_next}`
})``;