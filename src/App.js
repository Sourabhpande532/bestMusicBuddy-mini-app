import "./App.css";
import { useState } from "react";

function App() {
  const [selectedMusicCategory, setSelectedMusicCategory] = useState("Latest");

  // Music collection organized by category
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
    Spiritual: [
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

  // turn it Array of available music categories
  const musicCategoryStore = Object.keys(musicCollection);

  // Function to handle button clicks and update the selected music category
  const handleClickBtn = (buttonType) => {
    setSelectedMusicCategory(buttonType);
  };

  return (
    <div className='App'>
      <h1>🎺🎸Music Buddy's </h1>
      <p>check out my favourite Music. Select a category to get started</p>
      {musicCategoryStore.map((category) => (
        <button className='faint-btn' onClick={() => handleClickBtn(category)}>
          {category}
        </button>
      ))}
      <hr />
      <ul style={{ listStyleType: "none" }}>
        {musicCollection[selectedMusicCategory].map((selectedMusicCategory) => (
          <li>
            <div className='music-list'>
              <span className='heading'>{selectedMusicCategory.name}</span>
              <div style={{ fontSize: "smaller" }}>
                {selectedMusicCategory.rating}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
