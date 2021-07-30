import React, {useEffect, useState} from 'react'


export default ()=>{
    const [cont, setCont]=useState(0);
    
    useEffect(
        ()=>{
            //console.log('Regarregou '+cont)
            document.getElementById('body')
        }
    )
    
    return(
        <>
            <h2>Use Effect</h2>
            <body id="body">
               <p>Contando {cont} vez</p> 
            </body>
            <button onClick={()=>setCont(cont+1)}>press</button>
        </>    
    )
}