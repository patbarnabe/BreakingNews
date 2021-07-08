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

    return (
        <>
        <Banner/> 

        <Link to="/search"><img className="banner-arrow" src={Arrow} alt="Ícone de Seta"/></Link> 

        <section>
            <h2 className="advices-title"><span>►</span> FRASES DO DIA <span>◄</span></h2>
            <img src="https://picsum.photos/500" alt="Fotos Aleatórias"/>
            <h3 className="advices-text">{advices.advice}</h3>
            <button className="advices-btn" onClick={handleClick}>Clique aqui para mudar a frase</button>
            <p>Ou atualize a página para mudar a imagem</p>
        </section>

        <Footer/>
        </>
    )
}

export default Advices
