import React from 'react'
import { useArticles } from '../componets/NewsPage/ArticlesContext'
import { Link } from 'react-router-dom'
import Signup from '../componets/HomePage/Signup'

const News = () => {
    const { articles } = useArticles()
    
    return (
        <>
        <div className='container'>
            <h2 className='section-titel-news'>Our News & Articles</h2>
            <div className='article-grid'>
                {articles.map(article => (
                    <div key={article.id} className='article-card'>
                        <Link to={`/news/${article.id}`}>
                            <img src={article.imageUrl} alt={article.title} className='article-image' />
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                            <p>Author: {article.author}</p>
                            <p>Published: {article.published}</p>
                            <p>Category: {article.category}</p>
                        </Link>
                    </div>
                ))}
            </div> 
        </div>
        <Signup/>
        </>
        

    );
}

export default News;
