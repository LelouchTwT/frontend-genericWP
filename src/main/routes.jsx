import { Router, Route, Redirect, hashHistory } from 'react-router';

import WpList from '../wp/wpList';
import WpForm from '../wp/wpForm';
import WpManager from '../wp/wpManagePosts'

function WpRouter() {
  return (
    <Router history={hashHistory}>
      <Route path="/addNoticia" component={WpForm} />
      <Route path="/noticias" component={WpList} />
      <Route path="/manageNoticias" component={WpManager} />
      <Redirect from="*" to="/noticias" />
    </Router>
  )
}
export default WpRouter;