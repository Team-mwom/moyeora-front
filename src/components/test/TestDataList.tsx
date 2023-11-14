import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Data{
  idx: number;
  name: string;
  family: string;
  age: number;
  weight: number;
}


const TestDataList = () => {
	const [data, setData] =  useState<Data[] | null>(null);

  	useEffect(() => {
    axios.get('/test')
    .then((response) => setData(response.data as Data[]))
      .catch((error) => console.log(error));
   
  }, []);

	return (
	
			<div>
           
            {
              data && data.map(rowData => (
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
};

export default TestDataList;
