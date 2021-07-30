import React, {useState} from 'react'

export default ()=>{

    const [on, setOn] = useState(true)
    
    return(
        <>
            <h2>Using State</h2>            
            <p>{on?'Olá, cheguei': 'Fui, partiu'}</p>
            <button onClick={()=>setOn(!on)}>{on?'Agora vai': 'Agora vem'}</button>
        </>
    )
}