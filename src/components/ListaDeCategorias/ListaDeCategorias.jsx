import React, { Component } from 'react';
import './estilo.css'

class ListaDeCategorias extends Component {
    state = {}
    render() {
        return (
            <section className='lista-categorias'>
                <ul className='lista-categorias_lista'>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                </ul>
                <input className='lista-categorias_input' type="text" />
            </section>
        );
    }
}

export default ListaDeCategorias;