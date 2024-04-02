import { useState } from "react";
import { puppyList } from "./data";
import "./path-to-css.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPup, setfeatPup] = useState(null);
  function handleClick(id) {
    setfeatPup(id);
  }
  const featuredPup = puppies.find((puppy) => puppy.id === featPup);
  console.log(featuredPup);
  return (
    <div>
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
          {puppy.name}
        </p>
      ))}
      {featPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default App;
