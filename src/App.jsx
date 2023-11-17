import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './views/Contact';
import Home from './views/Home';
import NotFaund from './views/NotFaund';
import Header from './componets/Header';
import Footer from './componets/Footer';
import News from './views/News';
import { ArticlesProvider } from './componets/NewsPage/ArticlesContext';
import Article from './views/Newsdetails';
import ScrollToTop from './componets/ScrollTo/ScrollToTop';


function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <ArticlesProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacts' element={<Contact/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/news/:id' element={<Article/>}/>
          <Route path='*' element={<NotFaund/>}/>
        </Routes>
      </ArticlesProvider>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
