import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props)
    return (
        <div className="main">
            {/* <p>{props.course.title}</p> */}
            
         
         <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={props.course.img} alt=""/>
                <div className ="card-body">
                    <h4 className="card-title">{props.course.title}</h4>
                    <p className="card-text">{props.course.details}</p>
                    <h6 className="card-text">Total duration: {props.course.duration}</h6>
                    <h6 className="card-title">Price:${props.course.price}</h6>
                    <button onClick={() => props.handleAddCourse(props.course)} className="btn btn-success">Enroll Now >></button>
                </div>
      </div>

        </div>
        
    );
};

export default Card;