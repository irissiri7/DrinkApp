import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const StyledLink = styled(Link)`
    display: block;
    color: rgb(96, 145, 128);
    text-decoration-line: none;
    padding: 2%;
    margin: 0;

    &:hover{
        background-color: rgb(96, 145, 128);
        color: white;
    }
`;

export const StyledLink404Page = styled(StyledLink)`
    display: inline;
    padding: 1% 5%;

    
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 5%;
`;