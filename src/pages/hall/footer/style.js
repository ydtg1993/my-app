import styled from 'styled-components';

export const FooterSection = styled.footer`
    width:100%;
    background-color:#282828;
`;

export const LinksSection = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    color:white;
    &>div{
        padding:0 0 3px 10px;
        overflow: hidden;
    }
    &>div>h2{
        font-size: 16px;
        margin: 5px 0 10px;
        font-weight:500;
    }
    @media (min-width: 760px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

export const LinkList = styled.ul`
    margin: 0;
    padding: 0;
`;

export const LinkRow = styled.li`
    font-size: 12px;
    margin-bottom: 5px;
    color: #cdcdcd;
`;

export const StateSection = styled.div`
    & > p{
        font-size: 12px;
        text-align: center;
        width: 100%;
        color: #919191;
    }
`;


