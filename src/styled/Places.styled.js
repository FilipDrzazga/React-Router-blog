import styled from "styled-components";

const PlacesSection = styled.section`
    width:100%;
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    flex-wrap:wrap;
    margin:0;
    padding-top:3rem;
    padding-bottom:3rem;
    background-color: #fef9f6;
    overflow: hidden;
`
const PlacesArticle = styled.article`
    position:relative;
    width:20%;
`
const PlacesName = styled.h2`
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    font-size:4rem;
    color: #fef9f6;
    margin:0;
`
const Figure = styled.figure`
    width:100%;
    height:100%;
    margin:0;
`
const PlacesImg = styled.img`
    width:100%;
    object-fit:cover;
`

export { PlacesSection, PlacesArticle, PlacesName, Figure, PlacesImg };