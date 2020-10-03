import React, {useState, useEffect} from 'react';
import './App.css';
import { client } from './client';
import { Posts } from './components/Posts';
import { IArticle} from './components/Post';

function App() {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    fetchData();
    // console.log(articles);
  }, [articles]);

  const fetchData = async() => {
    try {
      const resp = await client.getEntries ({content_type: 'easysite'});
      setArticles(resp.items as any);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="wrapper">
            <span className='logo'>react and contentful</span>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <Posts posts={articles} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
