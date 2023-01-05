import React from 'react'
import { useParams } from 'react-router-dom';
import { Navigation, List, Items, Anchor } from '../styled/PaginationRoute.styled';

const PaginationRoute = (props) => {

    const params = useParams();

    const { children, limit, path, length } = props;

    const begin = limit * (params.page - 1);
    const end = params.page * limit;

    const pages = Math.ceil(length / limit);
    const links = (new Array(pages).fill(0)).map((item, id) => (<Items key={id}><Anchor to={`${path}/${id + 1}`}>{id+1}</Anchor></Items>))


    return (
        <>
            {children.slice(begin, end)}
            <Navigation>
                <List>{links}</List>
            </Navigation>
        </>
  )
}

export default PaginationRoute;