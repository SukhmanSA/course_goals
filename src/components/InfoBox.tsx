import { ReactNode } from "react"

type HintBoxProps = {
    mode: "Hint"
    children: ReactNode
}

type WarningBoxProps = {
    mode: "Hint"|"Warning"
    children: ReactNode
    warningLevel: "low"|"medium"|"high"
}

type InfoBoxProp = HintBoxProps | WarningBoxProps

export default function InfoBox(props:InfoBoxProp){
    
        const{mode,children} = props

        if(mode === "Hint"){
       return( 
        <aside className="infobox infobox-hint"> 
        <p>{children}</p>
        </aside>
        )
        }
        const {warningLevel} = props

        return( 
            <aside className={`infobox infobox-warning warning--${warningLevel}`}> 
            <h2>Warning</h2>
            <p>{children}</p>
            </aside>
            )
    
}