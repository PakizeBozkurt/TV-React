import React from 'react';
import './App.css';
import { getAllEpisodes } from "./Episodes.jsx";

const episodes = getAllEpisodes();

function EpisodeCard(props) {
  //console.log(props);
  return <li key={props.episode.name}>{props.episode.name}</li>
}



function EpisodeList(){
  return (
    <ul>
      {episodes.map((episode) => (
        <EpisodeCard  episode={episode}/>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <EpisodeList />
    </div>
  );
}

export default App;
