import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    display: block;
    color: rgb(96, 145, 128);
    text-decoration-line: none;
    padding: 2%;

    &:hover{
        background-color: rgb(96, 145, 128);
        color: white;
    }
`;

export const StyledContainer = styled.div`
    margin: 2%;
`;