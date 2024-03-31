import { people } from './data.jsx';
import { getImageUrl } from './utils.jsx';
import { useState } from 'react';
import React from 'react';

function List() {
  const ListItems = people.map(person =>
    <li key={person.id}>
      <img 
      src={getImageUrl(person)}
      alt={person.name}
      />
      <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
    );
    return(<>
      <ul>{ListItems}</ul>
    </>
    )
    
}

function Formse() {
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log("Form submitted!")
    };
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="Field">
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                    </div>
                    <button disabled={!name} type="submit">
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

function Rating() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }
    console.log("Form submitted!");
    setComment("");
    setScore("10");
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className='Field'>
            <label>Score: {score} </label>
            <input type='range'
             min="0" 
             max="10"  
             value={score} 
             onChange={e => setScore(e.target.value)}
             />
          </div>
          <div className='Field'>
            <label>Comment:</label>
            <textarea value={comment} onChange={e => setComment(e.target.value)}/>

          </div>
          <button type='submit'>Submit</button>
        </fieldset>

      </form>

    </div>
  );
}



export default function App() {
  return (
    <>
    <Rating />
    <List />
    <Formse />
    

    </>
  )
}