import React, { useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import { fetchData } from "../services/movieapi";
import { useSelector, useDispatch } from "react-redux";
import { fetchUpcomingMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,fetchPopularMovies,fetchRecommendMovies } from "../actions"


function SliderMovie({ endpoint, page, movieID, className }) {
  // const [data, setData] = useState([]);
  const data = useSelector((state) => {
    switch (endpoint) {
      case "upcoming":
        return state.upcoming;
      case "top_rated":
        return state.top_rated;
      case "now_playing":
        return state.now_playing;
      case "popular":
        return state.popular;
      case "recommend":
        return state.recommend;
      default:
        return [];
    }
  });


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Slider className={className} {...settings}>
      {data.map((movie) => (
        <MovieCard key={movie.id} movieObject={movie} />
      ))}
    </Slider>
  );
}

export default styled(SliderMovie)`
  @import "slick-carousel/slick/slick.css";
  @import "slick-carousel/slick/slick-theme.css";

  width: 1150px;
  margin-left: 50px;

  .slick-list {
    height: 550px;
  }
  .slick-prev,
  .slick-next {
    top: 45%;
  }
`;
