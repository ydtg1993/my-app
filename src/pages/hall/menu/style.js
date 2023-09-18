import styled from 'styled-components';
import {fadeIn, HallStruct, ScrollType} from "../../style";

export const MenuStruct = styled(HallStruct)`
    grid-template-rows:40px auto 60px;
`;

export const Tabs = styled.div`
    width:100%;
    height:40px;
    display:flex;
    background: white;
    align-items: center;
    justify-content: space-around;
    position:relative;
`;

export const Tab = styled.div`
    flex-shrink: 1;
    font-size: 14px;
    font-weight: bolder;
    color: #443f75;
    padding: 5px 15px;
    cursor: pointer;
    user-select: none;
`;

export const TabNav = styled.div`
    position: absolute;
    z-index: 100000;
    width: 100%;
    top: 40px;
    left: 0;
    background: white;
    border-top: solid 1px #ededed;
    animation: ${fadeIn} .2s ease-in-out;
`;

export const Options = styled(ScrollType)`
    max-height:240px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
    @media (min-width: 400px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (min-width: 540px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`;

export const Option = styled.div`
    box-sizing: border-box;
    padding: 10px;
    margin: 5px 5px 0;
    background: #dbe1ff;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    transition: all .3s ease;
    
    &:hover,&.active,&:active{
        color: white;
        background-color: #a2b0ff;
    }
`;

export const OptionX = styled(Option)`
    background: #e6e6e6;
    margin: 10px 5px 10px;
    padding: 5px;
    
    &:hover,&:active{
        color: #443f75;
        background: #c3c3c3;
    }
`;

export const MenuList = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom:14px;
`;