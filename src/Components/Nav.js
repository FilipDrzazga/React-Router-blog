import React from "react";
import { List, Item, Anchor } from '../styled/Nav.styled';

const Nav = () => {
    return (
        <List>
            <Item><Anchor to='/countries'>Countries</Anchor></Item>
            <Item><Anchor to='/places'>Places</Anchor></Item>
            <Item><Anchor to='/future'>Future explore</Anchor></Item>
            <Item><Anchor to='/aboutMe'>About Me</Anchor></Item>
        </List>
    )
 };

export default Nav;