import styled from 'styled-components';
import {gif_finn, img_back} from "../../resource";

export const BodyWrapper = styled.div`
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
