import "./App.css";
import { useState } from "react";

function App() {
  const [music, setMusic] = useState("Latest");
  const musicCollection = {
    Latest: [
      {
        name: "Mera Piya Ghar Aaya 2.0",
        rating: "5/4.5",
      },
      {
        name: "Be Mausam Barasat",
        rating: "5/4",
      },
      {
        name: "Meri Ho Ja",
        rating: "5/3.5",
      },
    ],
    Spirtual: [
      {
        name: "Hare Krishana Hare Krishana",
        rating: "5/4",
      },
      {
        name: "Hay Ram Hay Ram",
        rating: "5/4.5",
      },
      {
        name: "Sumar manava shirdi sai",
        rating: "5/3",
      },
    ],
    Old: [
      {
        name: "Yarana",
        rating: "5/3",
      },
      {
        name: "Satyam shivam sundaram",
        rating: "5/3",
      },
      {
        name: "mai koi aisa git gau",
        rating: "5/3",
      },
    ],
  };
  // console.log(musicCollection["Latest"])
  const musicStore = Object.keys(musicCollection);
  // console.log(musicStore);
  const handleClickBtn = (buttonType) => {
    // console.log(buttonType);
    setMusic(buttonType);
  };
  return (
    <div className='App'>
      <h1>🎺🎸Music Buddy's </h1>
      <p>check out my favourite Music. Select a category to get started</p>
      {musicStore.map((category) => (
        <button className='faint-btn' onClick={() => handleClickBtn(category)}>
          {category}
        </button>
      ))}
      <hr />
      <ul style={{ listStyleType: "none" }}>
        {musicCollection[music].map((music) => (
          <li>
            <div className='musiclist'>
              <span className="heading">{music.name}</span>
              <div style={{ fontSize: "smaller" }}>{music.rating}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
