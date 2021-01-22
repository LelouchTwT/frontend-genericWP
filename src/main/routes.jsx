import { Router, Route, Redirect, hashHistory } from 'react-router';

import WpList from '../wp/wpList';
import WpForm from '../wp/wpForm';

function WpRouter() {
  return (
    <Router history={hashHistory}>
      <Route path="/addNoticia" component={WpForm} />
      <Route path="/noticias" component={WpList} />
      <Redirect from="*" to="/noticias" />
    </Router>
  )
}
export default WpRouter;