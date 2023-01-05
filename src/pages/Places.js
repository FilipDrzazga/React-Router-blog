import React from 'react'
import { Link } from 'react-router-dom';
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { PlacesSection, PlacesArticle, PlacesName, Figure, PlacesImg } from '../styled/Places.styled';
import Pagination from '../Components/Pagination';

const Places = () => {

  const [documents] = useAllPrismicDocumentsByType('town_post');

  return (
    <PlacesSection>
      {documents && <Pagination path={'/places'} limit={4} length={documents.length} >
        {documents && documents.map(places => (
          <PlacesArticle key={places.id}>
            <PlacesName>{places.data.town_name[0].text}</PlacesName>
            <Figure>
              <Link to={`/places/${places.uid}/town`}><PlacesImg src={places.data.town_img.url} alt={places.data.town_img.alt} ></PlacesImg></Link>
            </Figure>
          </PlacesArticle>
        ))}
      </Pagination>}
  </PlacesSection>
  )
}

export default Places