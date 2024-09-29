import { type ReactNode } from "react"

interface Goals 
{
    title:string;
    children: ReactNode
    onDelete: (id:number)=> void
    id:number
}

export default function CourseGoals({ title,children,onDelete,id }: Goals){
    return(
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={()=> onDelete(id)}>delete</button>
        </article>
    )
}