import { Component } from 'react';
import PageHeader from '../template/pageHeader'
import WpForm from './wpForm';
import WpList from './wpList';

export default class Wp extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', resume: '', img: '', content: '', list: [] }

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleChange(e) {
    /* this.setState({ ...this.state, title: e.target.value, resume: e.target.value, img: e.target.value, content: e.target.value }) */
    /* switch (e.target.id) {
      case title:
        this.setState({ ...this.state, title: e.target.value })
        break;
    } */
    console.log(e.target)
    this.setState({ ...this.state, [e.target.id]: e.target.value })
  }
  handleAdd() {
    console.log('add');
  }
  render() {
    return (
      <div>
        <PageHeader name="Noticias" small="Cadastro" />
        <WpForm title={this.state.title} resume={this.state.resume} img={this.state.img} content={this.state.content} handleChange={this.handleChange} handleAdd={this.handleAdd} />
        <WpList />
      </div>
    )
  }
}
