import React from 'react'

const pagination = ({ data, page, setPage }) => {
    return (
        <div className='pagination'>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>prev</button>
            {Array(Math.ceil(data.length / 10)).fill().map((_, i) => (
                <span className={page === i + 1 ? "active" : ""} onClick={() => setPage(i + 1)} key={i}>{i + 1}</span>
            ))}
            <button onClick={() => setPage(page + 1)} disabled={page * 10 >= data.length}>next</button>
        </div >
    )
}

export default pagination