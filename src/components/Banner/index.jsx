import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/news-logo.png'
import Home from '../../assets/home-icon.png'
import './styles.css'

const Banner = () => {
    return (
        <div className="banner-main">
            <Link to="/"><img className="banner-menu" src={Home} alt="Ícone da Página Inicial"/></Link>
            <div>
                <img className="banner-logo" src={Logo} alt="Logo do Breaking News"/>
                <p> notícias para você</p>
            </div>
            
        </div>
    )
}
export default Banner