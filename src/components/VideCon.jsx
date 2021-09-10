import React from 'react'
import VideoInfo from './VideoInfo'

export default function VideCon({ data }) {
    
    // checking if data exist, and waiting for fetched data 
    if (!data || data.length === 0) return <div className="loader"></div>
    return (
        <VideoInfo data={data} />
    )
}
