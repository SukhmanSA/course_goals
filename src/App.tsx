import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx"
import NewGoal from "./components/NewGoals.tsx";
import "./App.css";
import goalsImg from "./assets/download.jpeg"
import { useState } from "react";

export type CourseGoals ={
  title: string;
  description:string;
  id:number
}

export default function App(){

    const [goals,setGoals] = useState<CourseGoals[]>([]);  
  function handleAddGoal(goal:string,summary:string){
      setGoals((prevGoals)=>{
        const newGoals:CourseGoals = {
          title:goal,
          description:summary,
          id: Math.random()
        }
        return [...prevGoals,newGoals]
      })
  }

  function handleDelete(id:number){
      setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
  }

  return(
    <main>
      <Header image={{src:goalsImg,alt:"goal image"}}>
          <h1>Your Course Goals</h1>
      </Header>
      <NewGoal handleAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDelete={handleDelete}/>
    </main>
    )
}