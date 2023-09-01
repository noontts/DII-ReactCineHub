import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard'
import { fetchData } from '../../services/movieapi'
import { useParams, useNavigate } from 'react-router-dom';

const PaginatePage = ({ pageTitle, endpoint }) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { pageNumber } = useParams();
    const currentPage = parseInt(pageNumber, 10);


    const handleNextPage = () => {
        const nextPage = currentPage + 1;
        navigate(`/${pageTitle}/${nextPage}`);
    };
    
    useEffect(()=>{
        
        const fetchMovie = async()=>{
            try {
                const result = await fetchData(`${endpoint}`,`${pageNumber}`);
                setData(result.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchMovie();

    },[endpoint,pageNumber])

  return (
    <>
        <h1 style={{color: 'white'}}>{pageTitle}</h1>
        <div style={{display: 'grid' , gridTemplateColumns: 'auto auto auto auto auto',columnGap: '35px'}}>
            {data.map((movieObject)=>(
                <MovieCard key={movieObject.id} movieObject={movieObject}></MovieCard>
            ))}
        </div>
        <button onClick={handleNextPage} style={{marginTop:'10%' , fontSize:'20px' , width:' 200px' , borderRadius:'12px' , cursor:'pointer'}}>Next Page</button>
    </>
  )
}

export default PaginatePage