import CourseGoals from "./CourseGoals.tsx"
import { CourseGoals as CGoals } from "../App.tsx"
import InfoBox from "./InfoBox.tsx";
import { ReactNode } from "react"

    type CourseGoalListProp ={
         goals:CGoals[];
         onDelete: (id:number)=> void
    }
export default function CourseGoalList({goals,onDelete}:CourseGoalListProp){

        if(goals.length === 0){
            return(
                <InfoBox mode="Hint">
                    You don't have any course goals yet. Start adding some.
                </InfoBox>
            )
        }

        let warningBox:ReactNode;

        if(goals.length >=3){
            warningBox = (
            <InfoBox mode="Warning" warningLevel="low">
                Are you sure you can handle all these goals at once ?
            </InfoBox>
            )
        }

        if(goals.length >=5){
            warningBox = (
            <InfoBox mode="Warning" warningLevel="medium">
                These are just too many.
            </InfoBox>
            )
        }

        if(goals.length >=7){
            warningBox = (
            <InfoBox mode="Warning" warningLevel="high">
                You should not bite more than you can chew off.
            </InfoBox>
            )
        }

    return(
        <>
        {warningBox}
        <ul>
        {goals.map((goal)=>(
          <li key={goal.id}>
          <CourseGoals id={goal.id} title={goal.title} onDelete={onDelete}>
          <p>{goal.description}</p>
          </CourseGoals>
          </li>
        ))}
        </ul>
        </>
    )
}