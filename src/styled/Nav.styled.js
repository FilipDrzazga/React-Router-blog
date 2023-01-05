import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.ul`
    width:100%;
    height:5rem;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    margin:0;
    padding:0;
    list-style-type: none;
    `
    const Item = styled.li`
    width:25%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    `
    const Anchor = styled(Link)`
    font-size:1.2rem;
    color: inherit;
    text-decoration: inherit;
    color: #fef9f6;
`

export { List, Item, Anchor };