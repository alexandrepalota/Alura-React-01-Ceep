import { Component } from "react";
import './assets/index.css';
import './assets/App.css'
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
class App extends Component {

  constructor() {
    super()
    this.notas = []
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto}
    this.notas.push(novaNota)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro onCriarNota={this.criarNota} />
        <ListaDeNotas notas={this.notas} />
      </section>
    )
  }
}

export default App;
