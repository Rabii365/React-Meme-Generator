import React from "react";
import Data from "../components/Data";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/16iyn1.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(Data);

  function randomProperty() {
    const memesArr = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomIndex].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <header>
      <section className="meme-section">
        <div className="input-field">
          <input
            type="text"
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <div className="btn-section">
          <button onClick={randomProperty}>Get a new meme image🖼️</button>
        </div>
      </section>
      <div className="flex-meme">
        <img className="meme-image" src={meme.randomImage} alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </header>
  );
}
