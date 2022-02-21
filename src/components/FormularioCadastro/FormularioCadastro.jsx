import { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component {

    constructor() {
        super()
        this.titulo = ''

        this.handleMudancaTitulo = this.handleMudancaTitulo.bind(this)
    }

    handleMudancaTitulo(evento) {
        this.titulo = evento.target.value
        console.log(this.titulo)
    }

    render() {
        return (
            <form className="form-cadastro">
                <input
                    className="form-cadastro_input"
                    type="text"
                    placeholder="Título"
                    onChange={this.handleMudancaTitulo}/>
                <textarea
                    className="form-cadastro_input"
                    rows={15}
                    placeholder="Escreva sua nota..." />
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;