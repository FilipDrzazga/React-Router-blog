import styled from "styled-components";

const HeaderSection = styled.section`
    width:100%;
`
const HeaderContent = styled.header`
    width:100%;
    display:flex;
    flex-direction:columns;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`
const ImgSection = styled.section`
    position:relative;
    width:100%;
    height:30rem;
`
const Figure = styled.figure`
    width:100%;
    height:100%;
    margin:0;
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:top;
`
const BlogName = styled.h1`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-60%);
    margin:0;
    font-size:7rem;
    color: #fef9f6;
`
const BlogDescription = styled.h2`
    position:absolute;
    top:60%;
    left:50%;
    transform:translate(-50%,-30%);
    margin:0;
    font-size:1rem;
    font-weight:300;
    color: #fef9f6;
`
const BlogSentence = styled.p`
    position:absolute;
    bottom:10%;
    left:50%;
    transform:translate(-50%,-50%);
    margin:0;
    font-size:0.8rem;
    font-style: italic;
    text-align:center;
    color: #fef9f6;
`


export {HeaderSection, HeaderContent, ImgSection, Figure, Image, BlogName, BlogDescription, BlogSentence};