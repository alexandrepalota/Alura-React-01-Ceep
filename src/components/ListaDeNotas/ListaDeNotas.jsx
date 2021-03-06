import React, { Component } from 'react';
import CardNota from '../CardNota';
import "./estilo.css"

class ListaDeNotas extends Component {

    // Quando o construtor é usado só para receber as props, ele pode ser omitido

    render() {
        return (
            <ul className='lista-notas'>
                {this.props.notas.map((nota, index) => {
                    return (
                        <li key={index} className='lista-notas_item'>
                            <CardNota
                                index={index}
                                nota={nota}
                                onDeletarNota={this.props.onDeletarNota}/>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ListaDeNotas