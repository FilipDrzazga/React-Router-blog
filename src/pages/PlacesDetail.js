import React from 'react'
import { useParams } from 'react-router-dom';
import { usePrismicDocumentByUID } from '@prismicio/react';
import { PlacesDetailSection, PlacesDetailArticle, PlacesDetailHeader, PlacesDetailTitle, PlacesDetailDescription, PlacesDetailParagraph, PlacesDetailImgContainer, PlacesDetailFigure, PlacesDetailImg } from '../styled/PlacesDetail.styled';

const PlacesDetail = () => {

    const param = useParams();
    const [document] = usePrismicDocumentByUID('town_post', param.name);

    return (
        <>
            {document &&
                <PlacesDetailSection>
                    <PlacesDetailArticle>
                        <PlacesDetailHeader>
                            <PlacesDetailTitle>{document.data.town_name[0].text}</PlacesDetailTitle>
                            <PlacesDetailDescription>{document.data.town_description[0].text}</PlacesDetailDescription>
                            <PlacesDetailParagraph>{document.data.town_paragraph[0].text}</PlacesDetailParagraph>
                        </PlacesDetailHeader>
                        <PlacesDetailImgContainer>
                            <PlacesDetailFigure>
                                <PlacesDetailImg src={document.data.town_img.url} alt={document.data.town_img.alt} />
                            </PlacesDetailFigure>
                            <PlacesDetailFigure small>
                                <PlacesDetailImg src={document.data.town_img_small.url} alt={document.data.town_img_small.alt} />
                            </PlacesDetailFigure>
                        </PlacesDetailImgContainer>
                    </PlacesDetailArticle>
                </PlacesDetailSection>
            }
        </>
  )
}

export default PlacesDetail;