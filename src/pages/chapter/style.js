import styled from 'styled-components';
import {ScrollType} from "../style";
import {dog_sleep} from "../../resource";

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