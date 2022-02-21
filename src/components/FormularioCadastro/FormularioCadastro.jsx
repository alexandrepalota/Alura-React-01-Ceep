import { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component {

    constructor(props) {
        super(props)
        this.titulo = ''
        this.texto = ''

        this.handleMudancaTitulo = this.handleMudancaTitulo.bind(this)
        this.handleMudancaTexto = this.handleMudancaTexto.bind(this)
        this.criarNota = this.criarNota.bind(this)
    }

    handleMudancaTitulo(evento) {
        evento.stopPropagation()
        this.titulo = evento.target.value
    }

    handleMudancaTexto(evento) {
        evento.stopPropagation()
        this.texto = evento.target.value
    }

    criarNota(evento) {
        evento.preventDefault()
        evento.stopPropagation()
        this.props.onCriarNota(this.titulo, this.texto)
    }

    render() {
        return (
            <form
                className="form-cadastro"
                onSubmit={this.criarNota}>
                <input
                    className="form-cadastro_input"
                    type="text"
                    placeholder="Título"
                    onChange={this.handleMudancaTitulo}/>
                <textarea
                    className="form-cadastro_input"
                    rows={15}
                    placeholder="Escreva sua nota..."
                    onChange={this.handleMudancaTexto} />
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;