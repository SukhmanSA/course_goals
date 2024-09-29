import { type ReactNode } from "react"

interface headerType
{
    image:{src:string,alt:string}
    children: ReactNode
}

export default function Header({ image,children }: headerType){
    return(
        <header>
            <img src={image.src} alt={image.alt}></img>
            {children}
        </header>
    )
}