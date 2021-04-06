import React, { useState } from 'react';
import FakeData from '../FakeData/FakeData'
import Item from '../Item/Item';
import './Home.css'
const Home = () => {
    const [content,setcontent]=useState([]);
    console.log(FakeData.length);
    return (
        <div className="row container ">
            {FakeData.map(fd => <Item fd={fd}></Item>)}
        </div>
    );
};

export default Home;