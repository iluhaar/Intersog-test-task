import React from 'react'

export default function VideoInfo({ data }) {

    return (
        <div className='videos'>
            {data.items.map((item) => {
                return <div key={item.etag} className='videosInfo'>
                    <div className="videoDescription">
                        <h1>{item.snippet.title}</h1>
                        <p>{item.snippet.description}</p>
                        <p>{item.snippet.publishedAt.replace(/[a-za]/gi, ' ')}</p>
                    </div>
                    <img className='thumbnail' src={item.snippet.thumbnails.default.url} alt={item.snippet.channelTitle} />
                </div>
            })}
        </div>
    )
}
