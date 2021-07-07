import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './styles.css'
import Lupa from '../../assets/search-icon.png'
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

    console.log(news)

    useEffect(()=>{
        setSearchFilter(
            news.filter(news => {
                return news.title.includes(search)
            })
        )
    },[search, news])

    console.log(search)

    return (
        <>
            <Banner/>
            <section className="menu">
                <form className="form">
                    <input type ="text" id="search-box" className="button-or-input" placeholder="Pesquise uma notícia..." onChange={e=>{setSearch(e.target.value)}}/>

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

                    {searchFilter.map(news=> (

                        <div className="card-news" key={news.id}> 
                            <h2>{news.title}</h2>
                            <img src={news.urlToImage} alt={news.title}/>
                            
                            <div class="infos">
                                <p><span>Fonte:</span> {news.source.name}</p>
                                <p><span>Descrição:</span> {news.description}</p>
                                <p><span>Data/Hora de Publicação:</span> {news.publishedAt}</p>
                                <p><span>Link:</span> {news.url}</p>
                                <p><span>Conteúdo:</span> {news.content}</p>
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