
import './App.css';
import React, {useState} from 'react';
import CourseInput from './Components/CourseInput/CourseInput';
import CourseGoalList from './Components/CourseGoalList/CourseGoalList';

const DUMMY_DATA =[
  { text: 'Do all exercises', id:'g1'},
  { text: 'Complete the course', id:'g2'}
]
function App() {

  const [ goals, setGoals] = useState(DUMMY_DATA)

  
  const onAddGoalInputHandler = (goal) =>{
    // setGoals((prevGoals)=>{
    //   return [...prevGoals, goal];
    // })
    if(goal.trim() !== ''){
      const newGoal ={
        id: Math.random().toString(),
        text: goal.trim()
      }
      setGoals(prevGoals => [...prevGoals, newGoal]);
    }
  }


  return (
    <div>
      <div className="app">
          <div>
            <CourseInput onAddGoal={onAddGoalInputHandler} />
          </div>
          <div>
            <CourseGoalList goals={goals} />
          </div>
      </div>
    </div>
  );
}

export default App;
