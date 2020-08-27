import React from 'react';
import DemoCourse from '../FakeData/DemoCourse';
import { useState } from 'react';
import './Course.css'
import Card from './Card/Card';
import Cart from './Cart/Cart';


const Course = () => {
    const first15 = DemoCourse.slice(0,15);
    const [course, setCourse] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (subject)=>{
        console.log('addded',subject.title);
        const newCart = [...cart, subject];
        setCart(newCart);

    }


    return (
        <div className="main-div">
            {/* <h1>onlinr course: {course.length}</h1> */}
            <div className="course-container">
            
                {
                    course.map(name => <Card handleAddCourse={handleAddCourse} course={name}></Card> )
                     
                }
                 
           </div>
      <div className="cart-container">
          <Cart cart={cart}></Cart>
      </div>
            
        </div>
    );
};

export default Course;