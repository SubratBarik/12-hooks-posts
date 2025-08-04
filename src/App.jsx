import { useState, useEffect } from 'react'

function App() {

  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    //console.log('Resource Render');
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => 
        //setItems(json)
        {const firstTen = json.slice(0, 10);
        setItems(firstTen)}
      )
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <div>
        <h3 style={{ textTransform: 'capitalize', marginBottom: '10px' }}>{resourceType}</h3>
        <ul>
        {items.map((item) => {
          //return <pre>{JSON.stringify(item)}</pre>
          return item.title ? <li key={item.id}>{item.title}</li> : <li key={item.id}>{item.name}</li>
        })}
        </ul>
      </div>
    </>
  )
}

export default App
