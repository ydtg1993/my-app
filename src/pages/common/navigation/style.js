import styled from 'styled-components';
import {gif_finn, img_nav,gif_search} from '../../../resource';

export const BottomFloor = styled.div`

`;

export const Bottom = styled.div`
    display:flex;
    background: #ffffffd6;
    height: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const NavigationTab = styled.div`
    width: 45px;
    height: 45px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-repeat: no-repeat;
    background-image: url(${img_nav});
    
    &.home{
        background-position: -10px -10px;
    }
    
    &.menu{
        background-position: -10px -75px;
    }
    
    &.menu-in{
        background-position: -75px -75px;
    }
    
    &.search{
        background-position: -75px -10px;
    }
    
    &.ibook{
        background-position: -140px -10px;
    }
    
    &.ibook-in{
        background-position: -140px -75px;
    }
    
    &.me{
        background-position: -10px -140px;
    }
    
    &.me-in{
        background-position: -75px -140px;
    }
    
    &.who{
        background-position: -140px -140px;
    }
`;






