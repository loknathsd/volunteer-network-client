import React from 'react';
import logo from '../../images/babySit.png'


const Event = ({event}) => {
    console.log(event)
    return (
        <div className="col-md-3 ">
            <img style={{height:'250px'}} src={logo} alt="img" />
            <h3  >{event.name}</h3>
            
        </div>
    );
};

export default Event;