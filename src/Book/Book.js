import React from 'react';
import { useParams } from 'react-router';
import './Book.css'
import FakeData from '../FakeData/FakeData'

const Book = () => {
    const { id } = useParams();
    const data = FakeData.find(fd => fd.id == id);
    console.log(data);
    return (
        <div className="row container mt-5">
            <div className="col-5 form pt-4 p-5">
                <p>You are Choice {data.name}</p>
                <br/>
                <form action=''>
                    <input className='input' type="text" placeholder='pick from' />
                    <br /><br />
                    <input className='input' type="text" placeholder='pick to' />
                    <br/><br/>
                    <input type="date"/>
                    <input type="date"/>
                </form>
                <br/>
                <button className='search'>Search</button>

            </div>
            <div className="col-6 map ">
                <img src="https://www.google.com/maps/d/thumbnail?mid=1hjs3mIoZBblBP_CvxiP4w38STiY" alt=""/>
            </div>
        </div>
    );
};

export default Book;