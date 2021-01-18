import { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ViewWrapper from './ViewWrapper';

const TicketsView = lazy(() => import('tickets/TicketsView'));
const UserView = lazy(() => import('user/UserView'));

function Routes() {
  return (
    <Switch>
      <Route path="/tickets">
        <ViewWrapper>
          <TicketsView />
        </ViewWrapper>
      </Route>
      <Route path="/docs">
        <p>Docs</p>
      </Route>
      <Route path="/profile">
        <ViewWrapper>
          <UserView />
        </ViewWrapper>
      </Route>
      <Route>
        <Redirect to="/tickets" />
      </Route>
    </Switch>
  )
}

export default Routes;
