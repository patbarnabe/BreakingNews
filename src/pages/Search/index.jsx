import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import './styles.css'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

const Search = () => {

    const [news, setNews] = useState([])
    const [searchFilter, setSearchFilter] = useState([])
    const [search, setSearch] = useState('')
    
    
    useEffect(() => {

        const getData = async () => {
            const response = await Axios.get('https://newsapi.org/v2/top-headlines?country=br&apiKey=495880a89383495391dd2ea834e2c2d1')
            const data = await response.data
            setNews(data.articles)
        }
        getData()
        
    }, [])

    useEffect(()=>{
        setSearchFilter(
            news.filter(news => {
                const newsTitle = news.title.toUpperCase()
                const searchToUpperCase = search.toUpperCase()
                return newsTitle.includes(searchToUpperCase)
            })
        )
    },[search, news])

    return (
        <>
            <Banner/>
            <section className="menu">
                <form className="form">
                    <input type ="text" id="search-box" className="button-or-input" placeholder="Pesquise uma notícia..." onChange={e=>{setSearch(e.target.value)}}/>
                
                    <select id="order" className="button-or-input">
                        <option disable="true">Selecione</option>
                        <option> Alfabética </option>
                        <option> Data </option>
                        <option> Outra Coisa </option>
                    </select>

                    <select id="option" className="button-or-input" >
                        <option disable="true">Ordem</option>
                        <option>Crescente</option>
                        <option>Decrescente</option>      
                    </select>

                    <button id="order-button" className="button-or-input">Ordenar</button>

                    <button id="reset-button" className="button-or-input">Limpar</button>

                    <Link to="/headlines">
                    <button id="headlines-button" className="button-or-input"><span>Manchetes do Dia</span></button></Link>

                    {searchFilter.map(news=> (

                        <div className="news-card">
                            <div className="flip-card-news"> 
                                <div className="flip-card-news-front">
                                    <h2>{news.title}</h2>
                                    <img src={news.urlToImage} alt={news.title}/>
                                    <p><span>Fonte:</span> {news.source.name}</p>
                                    <p className="description-news"> {news.description}</p>
                                </div>
                                
                                <div className="flip-card-news-back">
                                    <p><span>Data/Hora de Publicação:</span> {news.publishedAt}</p>
                                    <p><span>Link:</span> {news.url}</p>
                                    <p><span>Conteúdo:</span> {news.content}</p>
                                </div>   

                            </div>   
                        </div> 

                    ))}
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Search
