import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard'
import { fetchData } from '../../services/movieapi'

const PaginatePage = ({ pageTitle }) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        
        const fetchMovie = async()=>{
            try {
                const result = await fetchData('now_playing',1);
                setData(result.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchMovie();

    },[])

  return (
    <>
        <h1 style={{color: 'white'}}>{pageTitle}</h1>
        <div style={{display: 'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {data.map((movieObject)=>(
                <MovieCard key={movieObject.id} movieObject={movieObject}></MovieCard>
            ))}
        </div>
    </>
  )
}

export default PaginatePage