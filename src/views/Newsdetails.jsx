import React, { useEffect } from 'react'
import { useArticles } from '../componets/NewsPage/ArticlesContext'
import { useParams } from 'react-router-dom'
import ArticleNews from '../componets/HomePage/ArticleNews'

const Newsdetails = () => {
  const {article, getArticle } = useArticles()
  const {id} = useParams()
  useEffect (()=>{

    getArticle(id)

  },[])
  
  return (
    <>
    <div className='container'>
      <div className='article-page'>
        <div className='article'>
          <h2 className='section-titel-news'>{article.title}</h2>
          <div className='article-grid-d'>
            <div className='article-card-d'>
              <img src={article.imageUrl} alt={article.title} className='article-image' />
              <p>{article.content}</p>
              <p>Author: {article.author}</p>
              <p>Published: {article.published}</p>
              <p>Category: {article.category}</p>
            </div>
          </div>
        </div>
        <div className='article-info'>
          <div className='article-search'>
             <i className="fa-solid fa-magnifying-glass"></i>
             <input type="text" placeholder='Type to search...'/>
          </div>
          <div className='Recent-Posts'>
            <h4>Recent Posts</h4>
            <p>How To Blow Through Capital At An Incredible Rate </p>
            <span>Jan 14, 2020</span>
            <p>Design Studios That Everyone Should Know About?  </p>
            <span>Jan 14, 2020</span>
            <p>How did we get 1M+ visitors in 30 days without anything! </p>
            <span>Jan 14, 2020</span>
            <p>Figma On Figma: How We Built Our Website Design System </p>
            <span>Jan 14, 2020</span>
          </div>
          <div className='Categories'>
            <h4>Categories</h4>
            <p>
              Technology  -  20 Posts <br />
              Freelancing  -  07 Posts <br />
              Writing  -  16 Posts <br />
              Marketing  -  11 Posts <br />
              Business  -  35 Posts <br />
              Education  -  14 Posts <br />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='article-news-details'>
      <ArticleNews />
    </div>
    </>
    
  )
  
}

export default Newsdetails