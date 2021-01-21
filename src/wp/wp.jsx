
import PageHeader from '../template/pageHeader';
import WpForm from './wpForm';
import WpList from './wpList';

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