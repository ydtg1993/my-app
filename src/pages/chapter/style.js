import styled from 'styled-components';
import {ScrollType} from "../style";

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
    
    & img {
        width:100%;
    }
`;