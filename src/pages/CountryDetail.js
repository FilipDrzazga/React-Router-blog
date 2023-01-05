import React from "react";
import { useParams } from "react-router-dom";
import { usePrismicDocumentByUID } from "@prismicio/react";
import { CountryDetailSection, CountryArticle,CountryHeader, CountryName, CountryDescription, CountryParagraph, Figure, CountryImg } from '../styled/CountryDetail.styled';

const CountryDetail = () => {

    const param = useParams();
    const [document] = usePrismicDocumentByUID('country_post', param.name);

    return (
        <CountryDetailSection>
            {document && (
                <CountryArticle key={document.uid}>
                    <CountryHeader>
                        <CountryName>{document.data.country_name[0].text}</CountryName>
                        <CountryDescription>{document.data.country_description[0].text}</CountryDescription>
                        <CountryParagraph>{document.data.country_paragraph[0].text}</CountryParagraph>
                    </CountryHeader>
                    <Figure>
                        <CountryImg src={document.data.country_img.url} alt={document.data.country_img.alt} ></CountryImg>
                    </Figure>
                </CountryArticle>
            )}
        </CountryDetailSection>
    )
};

export default CountryDetail;