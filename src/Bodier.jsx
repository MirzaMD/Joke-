import { useState, useEffect, createContext} from 'react';
export const btnContext=createContext();
export function Bodier({children}){
    const[jokes,setJokes]=useState([]);
    const[error,setError]=useState("");
    const[refresh,setRefresh]=useState(true);
    const[plines,setPLines]=useState({});
useEffect(()=>{
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response=>{
        if(!response.ok) throw new Error("Couldn't fetch.")
            return response.json() })
        .then(jokes=>{setJokes(cur=>([...cur,jokes]))
            setTimeout(()=>{
                setPLines(cur=>({
                    ...cur,[jokes.id]:true,
                }))
            },1000)
        })
        .catch(err=>setError(err.message))
        .finally(()=>setRefresh(false))
    
},[])
const clr={
    color:"#d9ffe6"
}
    return (
    <btnContext.Provider value={{setRefresh}}>
    <section className='relative top-[100px] left-[0] sm:left-[250px]'>
        {jokes.map((j,i)=>(
            <div key={j.id || i} className='flex flex-col w-[250px] sm:w-[800px]'>
            <h1 className=' ml-10 text-xl sm:text-4xl' style={clr}>{j.setup}</h1>
               {plines[j.id]?<h1 className='ml-10 text-xl sm:text-4xl' style={clr}>{j.punchline}</h1>:<h1></h1>} 
            </div>
        ))}
        {children}
    </section>
    </btnContext.Provider>
)
}