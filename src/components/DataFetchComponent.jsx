import React, { useState, useEffect } from 'react';
import "./DataStyle.css"

export default function DataFetchComponent() {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error)
        setIsLoading(false)
      })
  }, [])
  
  // console.log(data);

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Error: {error.message}</h1>

  return (
    <div className={'container'}>
      {data.map((post) => (
        <div key={post.id} className={'item'}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}