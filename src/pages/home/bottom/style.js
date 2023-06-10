import styled from 'styled-components';
import {img_finn} from '../../../resource';
import {img_category} from '../../../resource';
import {img_search} from '../../../resource';
import {img_books} from '../../../resource';
import {img_me} from '../../../resource';
export const BottomFloor = styled.div`
    padding:5px;
`;

export const Bottom = styled.div`
    display:flex;
    background: #ffffffd6;
    height: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const NavigationTab = styled.img`
    width:45px;
    height:45px;
    position:relative;
    margin:0 auto;
`;

export const Nav1 = styled(NavigationTab).attrs({
    src:`${img_finn}`
})``;

export const Nav2 = styled(NavigationTab).attrs({
    src:`${img_category}`
})``;

export const Nav3 = styled(NavigationTab).attrs({
    src:`${img_search}`
})``;

export const Nav4 = styled(NavigationTab).attrs({
    src:`${img_books}`
})``;

export const Nav5 = styled(NavigationTab).attrs({
    src:`${img_me}`
})``;





