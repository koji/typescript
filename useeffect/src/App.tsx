import React, { useState, useEffect } from 'react';


const App = () => {
  const [resourceType, setResourceType] = useState<string>('posts');
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    console.log('width', windowWidth)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // when resourceType is changed, call console.log (with [resourceType])
  // when render, call console.log (without [resourceType])
  useEffect(() => {
    console.log('resourceType is changed')
    const getUserData = async () => {
      try {
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/${resourceType}`
        )
        const data = await resp.json()
        setItems(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getUserData()
  }, [resourceType])

  // useEffect(() => {
  //   console.log('render');
  // });

  // onMount
  // useEffect(() => {
  //   console.log('onMount');
  // }, []);

  // "return"
  // "resource changed"
  // useEffect(() => {
  //   console.log('resource changed');
  //  return () => {
  // clean up
  //    console.log('return');
  //  }
  // }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>post</button>
        <button onClick={() => setResourceType('users')}>users</button>
        <button onClick={() => setResourceType('comments')}>comments</button>
      </div>
      <h1>{resourceType}</h1>
      <h2>{windowWidth}</h2>
      {items.map((item: any, index: number) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}

export default App;
