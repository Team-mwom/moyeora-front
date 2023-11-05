import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

interface Data {
  name: string;
  family: string;
  age: number;
  weight: number;
}
function App() {
  const [data, setData] =  useState<Data | null>(null);

  useEffect(() => {
    axios.get('/test')
    .then((response) => setData(response.data as Data))
    .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {data && (
        <div>
          <h1>name: {data.name}</h1>
          <h1>family: {data.family}</h1>
          <h1>age: {data.age}</h1>
          <h1>weight: {data.weight}</h1>
        </div>
      )}
    </div>
  );
};

export default App;