import styled from 'styled-components';
import {HallStruct} from "../../style";

export const MenuStruct = styled(HallStruct)`
    grid-template-rows:60px auto 60px;
`;

export const MenuList = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom:14px;
`;