import React, { useEffect, useState } from "react";

import { AiFillTwitterSquare } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";

import "./App.scss";

const App = () => {
  // const [theAuthor, setTheAuthor] = useState("");
  const [posts, setPosts] = useState([]);
  const [quote, setQuote] = useState("");

  // useEffect(() => {
  //   const getQuote = () => {
  //     axios
  //       .get("http://localhost:3000/random")
  //       .then((res) => {
  //         setPosts(posts);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getQuote();
  // }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchingPosts = await fetch("http://localhost:3000/random");
        const data = await fetchingPosts.json();

        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  const handleClick = () => {
    const random = posts[Math.floor(Math.random() * posts.length)];
    setQuote(random); //value assigned here
  };

  // console.log(posts);

  return (
    <React.Fragment>
      <button onClick={handleClick} className="button">
        حجايات بغدادية
      </button>
      <br />
      {quote && <q>{quote.content}</q>}
      {quote && (
        <div className="share">
          Share to
          <a
            id="icon"
            href={`http://twitter.com/intent/tweet?text="${quote.content}"`}
            target="_blank"
            rel="noopener noreferrer"
            title="share on twitter"
          >
            <AiFillTwitterSquare />
          </a>
        </div>
      )}
      <div className="footer">
        by me a burger
        <a
          id="icon"
          href="https://www.buymeacoffee.com/Hovsep93"
          target="_blank"
          rel="noopener noreferrer"
          title="share on twitter"
        >
          <FaHamburger />
        </a>
      </div>
    </React.Fragment>
  );
};

export default App;
