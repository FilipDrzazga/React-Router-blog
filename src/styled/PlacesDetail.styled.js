import styled, {css} from "styled-components";

const PlacesDetailSection = styled.section`
    width:100%;
`
const PlacesDetailArticle = styled.article`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    align-items:flex-start;
    padding:3rem 0 3rem 0;
    color: #fef9f6;
`
const PlacesDetailHeader = styled.header`
    order:2;
    width:40%;
`
const PlacesDetailTitle = styled.h1`
    width:100%;
    margin:0;
    font-size:4rem;
`
const PlacesDetailDescription = styled.h2`
    width:100%;
    margin:2.5rem 0 0 0;
    font-size:2rem;
`
const PlacesDetailParagraph = styled.p`
    width:70%;
    letter-spacing:3px;
    line-height:25px;
    word-spacing: 10px;
`
const PlacesDetailImgContainer = styled.div`
    position:relative;
    order:1;
    width:40%;
    margin:0;
`
const PlacesDetailFigure = styled.figure`
    position:absolute;
    width: 80%;
    margin:0;
    ${({ small }) => small && css`
        width:50%;
        top:20rem;
        right: 2rem;
    `}
`
const PlacesDetailImg = styled.img`
    width:100%;
    object-fit:cover;
`

export { PlacesDetailSection, PlacesDetailArticle, PlacesDetailHeader, PlacesDetailTitle, PlacesDetailDescription, PlacesDetailParagraph, PlacesDetailImgContainer, PlacesDetailFigure, PlacesDetailImg };