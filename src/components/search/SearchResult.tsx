import React from 'react';
import { useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

import Banner from 'components/common/Banner';
import Footer from 'components/common/Footer';
import MoyeoraResultList from 'components/moyeora/MoyeoraResultList';

// redux
import { useSelector, useDispatch } from "react-redux";

const SearchResult = () => {
    
    const [word, setWord] = useState('');
    const params = useParams();
    //const dispach = useDispatch();

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
            axios.get('/api/main/searchMain/' + params.word)
                .then((response) => {
                // dispach(setTestDataList(response));
                }).catch((error) => {
                    console.log(error)
                });
            });
    return(
        <>

        <div className='common_full'>
			<Banner/>
			<div className='main_full'>
                <MoyeoraResultList />
            </div>
			<Footer/>
		</div>

        </>
    );
};

export default SearchResult;