import styled from 'styled-components';
import {img_finn, img_nav} from '../../../resource';

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
`;

export const NavHome = styled(NavImg)`
    object-fit: none; object-position: -10px -10px; width: 65px; height: 65px; transform: scale(0.692);
`;

export const NavHomeChecked = styled(NavImg).attrs({
    src:`${img_finn}`
})`
    width: 45px;
    height: 45px;
`;

export const NavMenu = styled(NavImg)`
    object-fit: none; object-position: -178px -10px; width: 65px; height: 65px; transform: scale(0.692);
`;

export const NavMenuChecked = styled(NavImg)`
    object-fit: none; object-position: -178px -94px; width: 65px; height: 65px; transform: scale(0.692);
`;

export const NavSearch = styled(NavImg)`
    object-fit: none; object-position: -94px -10px; width: 65px; height: 65px; transform: scale(0.692);
`;

export const NavRank = styled(NavImg)`
    object-fit: none; object-position: -10px -94px; width: 65px; height: 65px; transform: scale(0.692);
`;

export const NavRankChecked = styled(NavImg)`
    object-fit: none; object-position: -94px -94px; width: 65px; height: 65px; transform: scale(0.692);
`;

export const NavMe = styled(NavImg)`
    object-fit: none; object-position: -10px -178px; width: 65px; height: 65px; transform: scale(0.692);
`;

export const NavMeChecked= styled(NavImg)`
    object-fit: none; object-position: -94px -178px; width: 65px; height: 65px; transform: scale(0.692);
`;





