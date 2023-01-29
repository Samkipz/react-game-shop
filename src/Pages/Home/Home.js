import React from "react";
import { Header, Slider, TitleList } from "../../component";
import './Home.scss'



//Home Pages! ☆ ★

export default function App() {
    return (
        <div className="homepage">
            <Header></Header>
            <Slider></Slider>
            <TitleList title="Top Games" />
            <TitleList title="Trending now" />
            <TitleList title="Most Played" />
        </div>

    );
}