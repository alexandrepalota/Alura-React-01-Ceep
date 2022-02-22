import { Component } from "react";
import "./estilo.css"
import {ReactComponent as DeleteSVG} from "../../assets/img/delete_black_24dp.svg" // precisa ser com letra maiúscula (DeleteSVG)

class CardNota extends Component {
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.nota.titulo}</h3>
                    <DeleteSVG onClick={() => this.props.onDeletarNota(this.props.index)} />
                </header>
                <p className="card-nota_texto">{this.props.nota.texto}</p>
            </section>
        );
    }
}

export default CardNota;