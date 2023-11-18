import React from 'react'
import { Link } from 'react-router-dom'
import { useArticles } from '../NewsPage/ArticlesContext'
import det2 from "../../assets/images/dot-2.png"


function ArticleNews() {
    const { articles } = useArticles()
    

    const handleArticleClick = (articleId) => {
        articles(articleId)
      };
  return (
    <>
    <section className="Article-News">
        <div className="container">
            <div className="Article-News-info">
                <div className="section-titel">
                    <p>Article & News</p>
                    <h2>Get Every Single Articles & News</h2>
                </div>
                <div className="center-content">
                   <Link to="/" className="btn-transparent">Browse Services<i className="fa-regular fa-arrow-up-right"></i></Link>
                </div>
            </div>
            <div className="article-news-images">
                {articles.slice(3, 6).map(article => (
                    <div key={article.id} className='article-card'>
                        <Link to={`/news/${article.id}`} onClick={() => handleArticleClick(article.id)} >
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
            <img className="dot-2" src={det2} alt="dot-2"/>
        </div>
    </section>
    </>
  )
}

export default ArticleNews