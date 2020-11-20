import React from 'react';
import { useState, useEffect } from 'react';

import { getToDoByIndex, getToDoByIndexInStr, getToDoByIndexInObj } from '../../api/home/Home_Api';

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        getToDoByIndexInObj().then( (results) => {

            setItems(Object.entries(results));


            //setItems((result));

            console.log(results);
        });

        return () => {
            
        }
    }, [])

    return (
        <div>
        {items}
            {/* {items.map((item) => {
                return (
                    <div key={item}>
                        {`${item[0]}: ${item[1]}`}
                    </div>
                )
            })} */}
        </div>
    )
}


export default Home;