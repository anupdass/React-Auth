import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = (props) => {
    const { id,name, image } = props.fd;
    const handleClick = ()=>{
        console.log('click');
    };
    return (
        <div className='col-2 mt-4 p-4 custom'>
           <Link to={`/booking/${id}`}>
                <img onClick={handleClick} width="100%" src={image} alt="" />
                <h1 className="text-center">{name}</h1>
           </Link>
           </div>
    );
};

export default Item;