import styled from "styled-components";

const CountryDetailSection = styled.section`
    width:100%;
    overflow:hidden;
    background-color: #fef9f6;
`
const CountryArticle = styled.article`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    padding:3rem 3rem 3rem 3rem;
    color: #333333;
`
const CountryHeader = styled.header`
    order:2;
    width:40%;
`
const CountryName = styled.h1`
    width:100%;
    margin:0;
    font-size:4rem;
`
const CountryDescription = styled.h2`
    width:100%;
    margin:2.5rem 0 0 0;
    font-size:2rem;
`
const CountryParagraph = styled.p`
    width:70%;
    letter-spacing:3px;
    line-height:25px;
    word-spacing: 10px;

`
const Figure = styled.figure`
    order:1;
    width:40%;
    margin:0;
`
const CountryImg = styled.img`
    width:100%;
    object-fit:cover;
`

export { CountryDetailSection, CountryArticle,CountryHeader, CountryName, CountryDescription, CountryParagraph, Figure,CountryImg };