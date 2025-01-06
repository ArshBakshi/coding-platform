import { useLoaderData } from "react-router-dom"

export const Aptitude=()=>{
    const quesData=useLoaderData();
    console.log(quesData);
    return <h1>Aptitude</h1>
}