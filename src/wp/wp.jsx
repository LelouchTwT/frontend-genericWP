import { useState } from 'react';

import PageHeader from '../template/pageHeader';
import WpForm from './wpForm';
import WpList from './wpList';

const URL = 'http://localhost:3003/api/main'
function Wp(props) {
  return (
    <div>
      <PageHeader name="Noticias" small="Cadastro" />
      <WpForm />
      <WpList />
    </div>
  )
}
export default Wp;