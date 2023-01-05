import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import PaginationRoute from './PaginationRoute';

const Pagination = (props) => {

    const { children, path, limit, length } = props;

  return (
      <Switch>
          <Route path={`${path}/:page`}>
              <PaginationRoute path={path} limit={limit} length={length} >
                  {children}
            </PaginationRoute>
          </Route>
          <Redirect to={`${path}/1`}/>
      </Switch>
  )
}

export default Pagination;