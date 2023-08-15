import React from "react";
import "../../assets/style/Home.css"
import { SliderMovie } from "../../components/SliderMovie";

export function Home(){
    return (
        <>
        <h2>Now Playing</h2>
            <SliderMovie endpoint={'now_playing'}/>
        <h2>Popular</h2>
            <SliderMovie endpoint={'popular'}/>
        <h2>Top Rated</h2>
            <SliderMovie endpoint={'top_rated'}/>
        <h2>Upcoming</h2>
            <SliderMovie endpoint={'upcoming'}/>
        </>
    );
}