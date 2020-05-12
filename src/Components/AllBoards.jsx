import React, { useState, useEffect } from 'react';
import { getMyBoards } from "../Services/services";

import { Card, Box } from '@material-ui/core';

const AllBoards = () => {
    
    const [allBoards, setAllBoards] = useState([]);


    const getAllBoards = () =>{
        getMyBoards()
            .then(res=>{console.log('my boards', res)});
    }

    useEffect(()=>{
        getAllBoards()
    },[])

    return ( 
        <>
        <Box>
            {allBoards.map((board)=>
            <>
            <Card style={{backgroundColor:'green'}}>
                received board
            </Card>
            </>)}
        </Box>            
        </>
     );
}
 
export default AllBoards;