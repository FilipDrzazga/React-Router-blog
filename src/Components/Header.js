import React from "react";
import Nav from "./Nav";
import { HeaderSection, HeaderContent, ImgSection, Figure, Image, BlogName, BlogDescription, BlogSentence } from "../Styled/Header.styled";

import { useSinglePrismicDocument } from "@prismicio/react";

const Header = () => {

    const [document] = useSinglePrismicDocument('header');

    return (
        <HeaderSection>
                {document && (
            <HeaderContent>
                <ImgSection>
                    <Figure>
                        <Image src={document.data.header_img.url} alt={document.data.header_img.alt}></Image>
                    </Figure>
                    <BlogName>{document.data.header_h1[0].text}</BlogName>
                    <BlogDescription>{document.data.header_h2[0].text}</BlogDescription>
                    <BlogSentence>{document.data.header_sentence[0].text}</BlogSentence>
                </ImgSection>
                <Nav/>
            </HeaderContent>
            )}
        </HeaderSection>
    )
}

export default Header;