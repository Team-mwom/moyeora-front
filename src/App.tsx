import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';


interface Data{
  idx: number;
  name: string;
  family: string;
  age: number;
  weight: number;
}


function App() {
  const [data, setData] =  useState<Data[] | null>(null);
  let str: String;

  useEffect(() => {
    axios.get('/test')
    .then((response) => setData(response.data as Data[]))
      .catch((error) => console.log(error));
   
  }, []);


  if (data != null) {
        return (
          
          <div>
           
            {
              data.map(rowData => (
                <div className="sibal">
                  <div>idx : {rowData.idx}</div>
                  <div>age : {rowData.age}</div>
                  <div>name : {rowData.name}</div>
                  <div>family : {rowData.family}</div>
                  <div>weight : {rowData.weight}</div>
                </div>
                
                
              )
              )
            }
            
              
          </div>
        );
  } else {
    return (
      <div></div>);
  }
}
  

export default App;