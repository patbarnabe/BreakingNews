import React, {useState, useEffect} from 'react'
import Axios from 'axios'
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

                    {searchFilter.map(news=> (

                        <div className="news-card">
                            <div className="flip-card"> 
                                <div className="flip-card-front">
                                    <h2>{news.title}</h2>
                                    <img src={news.urlToImage} alt={news.title}/>
                                    <p><span>Fonte:</span> {news.source.name}</p>
                                    <p className="description"> {news.description}</p>
                                </div>
                                
                                <div class="flip-card-back">
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


    // const [headlines, setHeadlines] = useState([])


    // useEffect(() => {

    //     const getHeadlines = async () => {
    //         const response = await Axios.get('https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=495880a89383495391dd2ea834e2c2d1')
    //         const data = await response.data
    //         setNews(data.articles)
    //     }
    //     getHeadlines()
        
    // }, [])


                    {/* {headlines.map(headline => (
                        <div className="card-headlines"> 
                        <h2>MANCHETES</h2>
                        <h3>{headline.title}</h3>
                        <img src={headline.urlToImage} alt={headline.title}/>
                        
                        <div class="infos">
                            <p><span>Fonte:</span> {headline.source.name}</p>
                            <p><span>Descrição:</span> {headline.description}</p>
                            <p><span>Data/Hora de Publicação:</span> {headline.publishedAt}</p>
                            <p><span>Link:</span> {headline.url}</p>
                            <p><span>Conteúdo:</span> {headline.content}</p>
                        </div>   
                    </div>    
                    ))} */}