import { Component } from "react";
import "./estilo.css"

class CardNota extends Component {
    render() {
        return (
            <section className="card-nota">
                <header>
                    <h3>{this.props.nota.titulo}</h3>
                </header>
                <p>{this.props.nota.texto}</p>
            </section>
        );
    }
}

export default CardNota;