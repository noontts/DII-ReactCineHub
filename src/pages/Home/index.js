import React ,{ useEffect } from "react";
import "../../assets/style/Home.css";
import SliderMovie from "../../components/SliderMovie";
import Banner from "../../components/Banner";
import Section from "../../components/Section";
import { fetchData } from "../../services/movieapi";
import { useDispatch } from "react-redux";
import { fetchUpcomingMovies, fetchTopRatedMovies, fetchNowPlayingMovies, fetchPopularMovies } from "../../actions"

export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataFromApi = async (endpoint, action) => {
      try {
        const result = await fetchData(endpoint);
        dispatch(action(result.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataFromApi("upcoming", fetchUpcomingMovies);
    fetchDataFromApi("top_rated", fetchTopRatedMovies);
    fetchDataFromApi("now_playing", fetchNowPlayingMovies);
    fetchDataFromApi("popular", fetchPopularMovies);
  }, [dispatch]);

  return (
    <>
      <Banner />
      <Section title={"Now Playing"} haveLink={true} link={'now-playing'}>
        <SliderMovie key="now_playing" endpoint={"now_playing"} />
      </Section>
      <Section title={"Popular"} haveLink={true} link={'popular'}>
        <SliderMovie key="popular" endpoint={"popular"}/>
      </Section>
      <Section title={"Top Rated"} haveLink={true} link={'top-rate'}>
        <SliderMovie key="top_rated" endpoint={"top_rated"}/>
      </Section>
      <Section title={"Upcoming"} haveLink={true} link={'upcoming'}>
        <SliderMovie key="upcoming" endpoint={"upcoming"}/>
      </Section>
    </>
  );
}
