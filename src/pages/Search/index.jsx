import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './styles.css'
import Lupa from '../../assets/search-icon.png'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'


const Search = () => {


    //FUNÇÕES E AXIOS




    return (
        <>
            <Banner/>
            <section className="menu">
                <form className="form">
                    <input type ="text" id="search-box" className="button-or-input" placeholder="Pesquise uma notícia..."/>

                    <button className="search-button" > <img className="search-icon" src={Lupa} alt="Ícone de Lupa"/></button>
                
                    <select id="order" className="button-or-input">
                        <option selected disable>Selecione</option>
                        <option> Alfabética </option>
                        <option> Data </option>
                        <option> Outra Coisa </option>
                    </select>

                    <select id="option" className="button-or-input" >
                        <option selected disable>Ordem</option>
                        <option>Crescente</option>
                        <option>Decrescente</option>      
                    </select>

                    <button id="order-button" className="button-or-input">Ordenar</button>

                    <button id="category-button" className="button-or-input">Categorias</button>

                    <button id="reset-button" className="button-or-input">Limpar</button>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Search