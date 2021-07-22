import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home';
import Portfolio from '../Portfolio';

function Routes() {
  const routeTo = (path, componentDisplayed) => (
    <Route exact path={path} component={componentDisplayed} />
  );
  return (
    <main>
      {routeTo('/', Home)}
      {routeTo('/portfolio', Portfolio)}
    </main>
  );
}

export default Routes;
