import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Arrow from '../../assets/arrow-icon.png'
import './styles.css'

function Advices() {

    const [advices, setAdvices] = useState({})
    const [click, setClick] = useState(() => {})

    useEffect(() => {

        const getAdvices = async () => {
            const response = await Axios.get('https://api.adviceslip.com/advice')
            const data = await response.data
            setAdvices(data.slip)
        }
        getAdvices()
        
    }, [click])

    function handleClick() {
        setClick(advices)
    }

    function refreshPage(){ 
        window.location.reload(); 
    }

    return (
        <>
        <Banner/> 

        <Link to="/search"><img className="banner-arrow" src={Arrow} alt="Ícone de Seta"/></Link> 

        <section className="advices-main">
            <h2 className="advices-title"><span>►</span> FRASES DO DIA <span>◄</span></h2>
            <div className="advices-card">
                <img src="https://picsum.photos/500" alt="Fotos Aleatórias"/>
                <h3 className="advices-text">"{advices.advice}"</h3>
            </div>

            <div className="advices-infos"> 
                <button className="phrase-btn" onClick={handleClick}>Clique aqui para mudar somente a frase</button>
                <p>OU</p>
                <button type="button" className="img-btn" onClick={ refreshPage }>Clique aqui para mudar o texto e a imagem</button>
            </div>
        </section>

        <Footer/>
        </>
    )
}

export default Advices
