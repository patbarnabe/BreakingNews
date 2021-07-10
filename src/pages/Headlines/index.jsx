import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Arrow from '../../assets/arrow-icon.png'
import './styles.css'

const Headlines = () => {

    const [headlines, setHeadlines] = useState([])

    useEffect(() => {

        try {
            const getHeadlines = async () => {
                const response = await Axios.get('http://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=495880a89383495391dd2ea834e2c2d1')
                const data = await response.data
                setHeadlines(data.articles)
            }
            getHeadlines()
        }
        catch {
            throw new Error()
        }  
        
    }, [])
    
    return (
        <>
            <Banner/> 

            <Link to="/search"><img className="banner-arrow" src={Arrow} alt="Ícone de Seta"/></Link>    

            <section className="container">
                <h2 className="headlines-title"><span>►</span> MANCHETES <span>◄</span></h2>
                    {headlines.map(headline => (

                            <div className="headlines-card">
                                <div className="flip-card-headlines"> 
                                    <div className="flip-card-headlines-front">
                                        <h2>{headline.title}</h2>
                                        <img src={headline.urlToImage} alt={headline.title}/>
                                        <p><span>Fonte:</span> {headline.source.name}</p>
                                        <p className="description-headlines">{headline.description}</p>
                                    </div>
                                    
                                    <div className="flip-card-headlines-back">
                                        <p><span>Data/Hora de Publicação:</span> {headline.publishedAt}</p>
                                        <p><span>Link:</span> <a href={headline.url} target="_blank" rel="noreferrer"><u>{headline.url}</u></a>
                                        </p>
                                        <p><span>Conteúdo:</span> {headline.content} <i>(veja mais no link acima)</i></p>
                                    </div>   
                                </div>  
                            </div>  
                    ))}
            </section>

            <Footer />
        </>
    )
}

export default Headlines