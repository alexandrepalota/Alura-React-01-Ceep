import { Component } from "react";
import './assets/index.css';
import './assets/App.css'
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
class App extends Component {

  constructor() {
    super();

    this.state = {
      notas: []
    }

    this.criarNota = this.criarNota.bind(this)
    this.deletarNota = this.deletarNota.bind(this)
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas
    arrayNotas.splice(index, 1)
    this.setState({ notas: arrayNotas })
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro onCriarNota={this.criarNota} />
        <main className="conteudo-principal">
          <ListaDeCategorias />
          <ListaDeNotas
            notas={this.state.notas}
            onDeletarNota={this.deletarNota} />
        </main>
      </section>
    )
  }
}

export default App;
