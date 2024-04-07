import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

// redux
import { useSelector, useDispatch } from "react-redux";

const SearchResult = () => {
    const [searchData, setSearchData] = useState([]);
    const params = useParams();
    const dispach = useDispatch();

        // useEffect(() => {
        //      async function fetchData() {
        //          const result = await axios.get(
        //           '/api/main/searchMain?word=' + params.word
        //          );
        //          //console.log(result.data.result);
        //          //setSearchData(result.data.result);
        //      }
        //      fetchData();
        // }, []);

        useEffect(() => {
                axios.get('/api/main/searchMain?word=' + params.word)
                .then((response) => {
                // dispach(setTestDataList(response));
                }).catch((error) => console.log(error));
            },[]
        );
    return(
        <>
            
        </>
    );
};

export default SearchResult;