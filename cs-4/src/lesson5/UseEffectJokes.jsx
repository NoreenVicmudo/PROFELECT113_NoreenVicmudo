import React, { useState, useEffect } from "react";

function UseEffectJokes() {
  const [joke, setJoke] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        ); //await kuha sa fetch sa link, link is yung nirereturn, kapag nirefresh browser, bago yung data
        const data = await response.json(); //pag nakuha yung datam convert to json
        setJoke(data); //which is yun yung ipapasok sa setjoke
        console.log("Fetched joke: ", data);
      } catch (error) {
        console.error("Error fetching joke: ", error);
      }
    };

    fetchJoke();

    //Cleanup -- Optional , pero ginagawa kung may gusto gawing logic kapag nangyari yung scenario
    return () => {
      console.log(" / Joke component unmounted. Cleanup done.");
    };
  }, [counter]);

  return (
    <div>
      <h2>Here's a random Joke</h2>
      {joke && (
        <>
          <p>
            <strong>{joke.setup}</strong>
          </p>
          <p>{joke.punchline}</p>
        </>
      )}
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
    </div>
  );
}

export default UseEffectJokes;
