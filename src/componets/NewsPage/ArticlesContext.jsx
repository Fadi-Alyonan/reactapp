import React, { createContext, useContext, useEffect, useState } from 'react'

const ArticleContext = createContext()



export const ArticlesProvider = ({ children }) => {
    const apiUrl = 'https://win23-assignment.azurewebsites.net/api/articles'
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState([])
    

    useEffect(() => {
        
        getAlticles()


    }, []);
    const getAlticles = async () => {
        const result = await fetch(apiUrl)
        const data = await result.json()
        setArticles(data)
    };
    const getArticle = async (id) => {
        const result = await fetch (`${apiUrl}/${id}`)
        const data = await result.json()
        setArticle(data)
    }
    

    return (
        <ArticleContext.Provider value={{ articles, article, getArticle }}>
            {children}
        </ArticleContext.Provider>
    );
};
export const useArticles = () => useContext(ArticleContext);
