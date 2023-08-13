import { useState } from "react";

function GoalForm(props){
  const [formData, setFromData] = useState({
    goal: "",
    by: ""
  });

  function changeHandler(e){
    setFromData({...formData, [e.target.name]: e.target.value})
  }

  function submitHandler(e){
    e.preventDefault();
    props.onAdd(formData)
    setFromData({
      goal: "",
      by: ""
    })
  }

  return (
    <>
    <hi>My little lemmon Goals</hi>
    <form onSubmit={submitHandler}>
      <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
      <input type="text" name="by" placeholder="by" value={formData.by} onChange={changeHandler} />
      <button>Submit Goals</button>
    </form>
    </>
  )
}


function ListOfGoals(props){
  return (
    <ul>
        {props.allGoals.map((g) => (
          <li key={g.goal}>
              <span>My goal is to {g.goal}, by {g.by}</span>
          </li>
        ))}
    </ul>
  )
}

export default function App(){
  const[allGoals,  updateAllGoals] = useState([]);
  
  function addGoal(goal) {updateAllGoals([...allGoals, goal])}
  return(
    <div>
      <GoalForm onAdd = {addGoal}/>
      <ListOfGoals allGoals={allGoals}/>
    </div>
    
  )
}