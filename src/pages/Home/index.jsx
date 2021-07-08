import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/news-logo.png'
import Click from '../../assets/click-icon.png'
import Footer from '../../components/Footer'
import './styles.css'

const Home = () => {
    return (
        <body>
            <div className="home-main">
                <Link to="/search"><img className="home-logo" src={Logo} alt="Logo do Breaking News"/></Link>
                <Link to="/search"><p> notícias para você</p></Link>
                <Link to="/search"><img className="home-click" src={Click} alt="Ícone de Click"/></Link>
            </div>
            <Footer />
        </body>
    )
}

export default Home