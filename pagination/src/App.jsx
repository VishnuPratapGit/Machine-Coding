import React, { useEffect, useState } from 'react'
import './components/style.css'
import Pagination from './components/pagination'

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then(res => res.json())
      .then(data => setData(data.products))
  }, []);

  return (
    <>
      <div>
        {data.slice(page * 10 - 10, page * 10).map(products => (
          <div key={products.id}>{products.title}</div>
        ))}
      </div>
      <Pagination data={data} page={page} setPage={setPage} />
    </>
  )
}

export default App