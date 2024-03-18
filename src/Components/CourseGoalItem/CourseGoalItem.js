import React from "react";
import Card from "../UI/Card";
import './CourseGoalItem.css';
 
const CourseGoalItem = (props) => {

    return(
        <Card className="card">
            <div className='goal-item'>
                {props.text}
            </div>
        </Card>
    )
}

export default CourseGoalItem;