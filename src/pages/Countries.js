import React from "react";
import { Link } from "react-router-dom";
import { CountriesSection, CountryArticle, CountryName, Figure, CountryImg } from '../styled/Countries.styled';
import { useAllPrismicDocumentsByType } from "@prismicio/react";

const Countries = () => {

    const [documents] = useAllPrismicDocumentsByType('country_post');

    return (
        <CountriesSection>
            {documents && documents.map(country => (
                <CountryArticle key={country.id}>
                    <CountryName>{country.data.country_name[0].text}</CountryName>
                    <Figure>
                        <Link to={`/countries/${country.uid}`}><CountryImg src={country.data.country_img.url} alt={country.data.country_img.alt} ></CountryImg></Link>
                    </Figure>
                </CountryArticle>
            ))}
        </CountriesSection>
    )
 };

export default Countries;