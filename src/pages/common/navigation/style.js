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
    width:45px;
    height:45px;
    overflow: hidden;
    display: flex; 
    justify-content: center; 
    align-items: center;
`;

export const NavImg = styled.img.attrs({
    src:`${img_nav}`
})`
    position:relative;
    margin:0 auto;
    transition: background-color 2s, color 2s;
`;

export const NavHome = styled(NavImg)`
    object-fit: none; object-position: -10px -10px; width: 65px; height: 65px; transform: scale(0.692);
`;

export const NavHomeSelected = styled(NavImg).attrs({
    src:`${gif_finn}`
})`
    width: 45px;
    height: 45px;
`;

export const NavMenu = styled(NavImg)`
    object-fit: none; object-position: -178px -10px; width: 65px; height: 65px; transform: scale(0.692);
`;

export const NavMenuSelected = styled(NavImg)`
    object-fit: none; object-position: -178px -94px; width: 65px; height: 65px; transform: scale(0.692);
`;

export const NavSearch = styled(NavImg)`
    object-fit: none; object-position: -94px -10px; width: 65px; height: 65px; transform: scale(0.692);
`;

export const NavSearchSelected = styled(NavImg).attrs({
    src:`${gif_search}`
})`
    width: 45px;
    height: 45px;
`;

export const NavIBook = styled(NavImg)`
    object-fit: none; object-position: -10px -94px; width: 65px; height: 65px; transform: scale(0.692);
`;

export const NavIBookSelected = styled(NavImg)`
    object-fit: none; object-position: -94px -94px; width: 65px; height: 65px; transform: scale(0.692);
`;

export const NavMe = styled(NavImg)`
    object-fit: none; object-position: -10px -178px; width: 65px; height: 65px; transform: scale(0.692);
`;

export const NavMeSelected = styled(NavImg)`
    object-fit: none; object-position: -94px -178px; width: 65px; height: 65px; transform: scale(0.692);
`;





