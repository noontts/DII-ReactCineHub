import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard'
import { fetchData } from '../../services/movieapi'
import { useParams, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const PaginatePage = ({ pageTitle, endpoint , className}) => {
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
    <div className={className}>
        <h1 className='header-text' >{pageTitle}</h1>
        <div className='show_data' style={{display: 'grid' , gridTemplateColumns: 'auto auto auto auto auto',columnGap: '35px'}}>
            {data.map((movieObject)=>(
                <MovieCard key={movieObject.id} movieObject={movieObject}></MovieCard>
            ))}
        </div>
        <button className='buttonNext' onClick={handleNextPage} >Next Page <box-icon Name='chevrons-right'></box-icon></button>
    </div>
  )
}

export default styled(PaginatePage)`

display: flex;
flex-direction: column;
justify-content: center;

text-align: center;


.header-text{
    color: #FFF;
    text-transform: uppercase;
    text-shadow: 4px 4px 4px rgba(76,71,71,0.25);

    margin-top: 50px;
    margin-bottom: 10px;
}

.show_data{
    display: grid  ;
    grid-template-columns: auto auto auto auto auto;
    column-gap: 35px;
}

.buttonNext{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #211f1f;
    cursor: pointer;
    font-size: 20px;
    width: 200px;
    border-radius: 12px;
    background-color: #FFF;
    text-shadow: 2px 2px 2px rgba(76,71,71,0.25);

    margin: 0 auto;
    margin-top: 10%;
    transition: 300ms;
}

.buttonNext:hover{
    background-color: #d9d9d9;
    transition: 300ms;
}

.buttonNext:active{
    background-color: #a1e533;
    transition: 100ms;
}



`

