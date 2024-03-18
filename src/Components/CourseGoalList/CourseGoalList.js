import React from "react";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList = (props) => {
    return(
        <ul>
            {props.goals.map(goal => (
                <CourseGoalItem
                    key = {goal.id}
                    id = {goal.id}
                    text = {goal.text}
                />
            ))}
        </ul>
    )
}

export default CourseGoalList;