import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "đ": "Monkey",
  "đĻ": "Gorilla",
  "đĻ§": "Orangutan",
  "đ": "Dog",
  "đē": "Wolf",
  "đĻ": "Fox",
  "đĻ": "Raccoon",
  "đ": "Cat",
  "đĻ": "Lion",
  "đ": "Tiger",
  "đ": "Leopard",
  "đ": "Horse",
  "đĻ": "Unicorn",
  "đĻ": "Giraffe",
  "đ": "Elephant",
  "đĻŖ": " Mammoth",
  "đĻ": " Rhinoceros",
  "đĻ": " Hippopotamus",
  "đ­": " Mouse Face",
  "đ": " Mouse",
  "đ": " Rat",
  "đš": " Hamster",
  "đ°": " Rabbit Face",
  "đ": " Rabbit",
  "đŋī¸": " Chipmunk",
  "đĻĢ": " Beaver "
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 class="font">Hello Welcome to Fun with Animals</h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning} </h2>

      <h3 class="font"> Animals we know </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
