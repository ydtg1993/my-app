import styled from 'styled-components';
import {ScrollType} from "../../style";
import {InfoPart as Info} from "../../style";
import {dog_record} from "../../../resource";

export const Section = styled(ScrollType)`
   padding: 5px 0;
`;

export const InfoPart = styled(Info)`
    & > li.btn {
        text-align:right;
        margin:0 0 0 5px;
    }
`;

export const EmptyBox = styled.img.attrs({
    src:`${dog_record}`
})`
        width:240px;
        margin: 30px auto;
        display: flex;
`;