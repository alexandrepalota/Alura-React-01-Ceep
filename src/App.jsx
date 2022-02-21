import { Component } from "react";
import './assets/index.css';
import './assets/App.css'
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
class App extends Component {

  constructor() {
    super();

    this.state = {
      notas:[]
    }

    this.criarNota = this.criarNota.bind(this)
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro onCriarNota={this.criarNota} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    )
  }
}

export default App;
