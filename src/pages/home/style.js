import styled from 'styled-components';
import {img_home_bg} from '../../resource';

export const HomeWrapper = styled.div`
    height: 100%;  
    width: 100%;  
    position: absolute;  
    top: 0px;  
    bottom: 0px;  
    background: url('${img_home_bg}') no-repeat;  
    background-size: cover;
    overflow:hidden;
    display: grid;
    grid-template-rows: 50px auto 50px;
    grid-template-columns:100%;
`;

