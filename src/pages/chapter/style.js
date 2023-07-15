import styled from 'styled-components';
import {ScrollType} from "../style";

export const DetailStruct = styled(ScrollType)`
    height: 100%;  
    width: 100%;
    top: 0px;  
    bottom: 0px;   
    overflow:hidden;
    display: flex;
    flex-direction: column;
    background: #faefde;
 
    @media (min-width: 1024px) {
        width: 1024px;
    }
`;
