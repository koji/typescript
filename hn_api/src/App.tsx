import React, { useState, useEffect } from 'react';

function App() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState<string>('AR');
  const [url, setUrl] = useState(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
      const fetchNews = async() => {
        // const url = `https://hn.algolia.com/api/v1/search?query=${searchQuery}`;
        setLoading(true);
        try {
          const resp = await fetch(url);
          const json = await resp.json();
          const data = json.hits;
          // console.log(data);
          setNews(data);
          setLoading(false);
        } catch (error) {
          console.log('error', error);
        };
      }
      fetchNews()
    }, [url]);

    // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const handleChange = (e: any) => {
      setSearchQuery(e.target.value);
    }

    const handleSubmit = (e:any) => {
      e.preventDefault();
      setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
    }

    const showLoading = () => {
      return (
        loading ? <h2>loading...</h2> : ''
      )
    }

    const searchForm = () => (
      <form onSubmit={handleSubmit}>
        <input type='text' value={searchQuery} onChange={handleChange} />
        <button>search</button>
      </form>
    );

    const showNews = () => (
      news.map((article: any, i: number) => (
        <div key={`hn-${i}`}>
          <p>{article.title? article.title : 'non title'}</p>
        </div>
      ))
    )

  return (
    <div className="App">
      <h2>hacker news api</h2>
      {showLoading()}
      {searchForm()}
      {showNews()}
    </div>
  );
}

export default App;
