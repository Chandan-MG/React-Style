import React, {useState} from "react";
import './CourseInput.css';

const CourseInput = (props) =>{

    const [enteredGoal, setEnteredGoal] = useState('');

    const [isValid, setIsValid] = useState(true);
    
    const textChangedHandler = (event) => {
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setEnteredGoal(event.target.value);
    }

    const submitFormHandler = (event) =>{
        event.preventDefault();

        if(enteredGoal.trim().length===0){
            setIsValid(false);
            return;
        }

        props.onAddGoal(enteredGoal);
        setEnteredGoal('');

    }

    return(
        <form onSubmit={submitFormHandler}>
            <div className='card'>
               <div className='new-goal-controls'>
                 <div className={`new-goal-control ${!isValid? 'invalid': ''}`}>
                   <label id='text' >Course Goal</label>
                   <input type='text' id='text' value={enteredGoal} onChange={textChangedHandler} />
                 </div>
               </div>
               <div className={`new-goal-button ${!isValid? 'invalid': ''}`}>
                  <button type='submit'>Add Goal</button>
               </div>
            </div>
        </form>
    )
}

export default CourseInput;