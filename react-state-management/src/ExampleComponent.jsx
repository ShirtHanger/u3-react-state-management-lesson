import { useState } from 'react';
import './App.css'

const ExampleComponent = () => {
  const [cats, setCats] = useState([
    { name: 'Myshka', breed: 'Ragdoll' },
    { name: 'Malta', breed: 'Turkish Angora' },
  ]);

  const addCat = (newCat) => {
    // spread current cats array and newCat object into a new array
    const newCatsArray = [...cats, newCat];
    // call state setter function with this new array
    setCats(newCatsArray);
  };

  const addCatVer2 = (newCat) => {
    setCats([...cats, newCat]);
  };


  return (
    <>
      <button onClick={() => addCat({ name: 'Kira', breed: 'Ragamuffin' })}>
        Add Cat
      </button>
      <button onClick={() => addCatVer2({ name: 'Garfield', breed: 'Siamese' })}>
        Add Cat (Different code, same outcome)
      </button>
      <ul>
        {cats.map((cat, idx) => (
          <li key={idx}> {cat.name} </li>
        ))}
      </ul>
    </>
  );
};

export default ExampleComponent
