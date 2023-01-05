import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = styled.nav`
    width:100%;
    padding-top:3rem;
`
const List = styled.ul`
    display:flex;
    justify-content: center;
    gap:2rem;
    align:items:center;
    width:100%;

`
const Items = styled.li`
    display:flex;
    justify-content:center;
    align:items:center;
    width:2%;
    height:2%;
    font-size:1.5rem;
    border:1px solid #333333;
    border-radius:25px;
    list-style-type: none;
`
const Anchor = styled(Link)`
    width:100%;
    height:100%;
    text-align:center;
    color: inherit;
    text-decoration: inherit;
    border-radius:25px;
    &:hover{
        background-color:#333333;
        color: #fef9f6;
    }
`

export { Navigation, List, Items, Anchor };