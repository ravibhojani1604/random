import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Main ({children}){

    const navigate = useNavigate();
    return <>
    <h1>Main Componnet</h1>
    <Button clickParam={()=>navigate('student')}>Back to Student</Button>
    {children}
    </>
}