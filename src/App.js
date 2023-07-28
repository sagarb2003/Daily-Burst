
import { useEffect, useState } from 'react';
import './App.css';
import Nav_daily from './components/Nav_daily';
import NewsContent from './components/NewsContent/NewsContent';
import apikey from './data/config'
import axios from 'axios';
import Footer from './components/Footer/Footer';

function App() {
  const[category,setCategory]=useState("general");
  const[newsArray,setNewsArray]=useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20)

  const newsApi=async ()=>{
    try {
      const proxyUrl="https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(
        `${proxyUrl}newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&pagesize=${loadmore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults)
    } catch (error) {
      console.log(error);
      
    }
  };
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults,category,loadmore])
  

  return (
    <div className="App">
      <Nav_daily setCategory={setCategory} />
      <NewsContent
        setLoadmore={setLoadmore}
        loadmore={loadmore}
        newsArray={newsArray}
        newsResults={newsResults}   />
      <Footer/>
    </div>
  );
}

export default App;
