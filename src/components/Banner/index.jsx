import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/news-logo.png'
import Arrow from '../../assets/arrow-icon.png'
import Menu from '../../assets/news-menu.png'
import './styles.css'

const Banner = () => {
    return (
        <div className="banner-main">
            <a rel="noreferrer"><img className="banner-menu" src={Menu} alt="Logo do Breaking News"/></a>
            <div>
                <img className="banner-logo" src={Logo} alt="Ícone do Menu Sanduíche"/>
                <p> notícias para você</p>
            </div>
            <Link to="/"><img className="banner-arrow" src={Arrow} alt="Ícone de Seta"/></Link>
        </div>
    )
}
export default Banner