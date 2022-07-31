import {Link,useNavigate} from "react-router-dom";
import React,{ useState } from "react";
const AboutScreen = () =>{
    var x=10;
    const tmpname = ["sok","som"];
    const backToStudentPage = useNavigate();
    const handleClickBackStudentPage = ()=>{
        backToStudentPage("/StudentScreen")
    }
  
    const [x1,setX1] = useState(10);
    const handleclick = () =>{
        x=100;
        setX1(x);
    }
    const [name,setName] = useState("");
    const [arrName,SetArrName]= useState(tmpname)
    const handleChangeName = (event) =>{
        setName(event.target.value)
    }
    const handleAdd = () =>{
           
    }
    return(
        <div>
            <h1>AboutScreen</h1>
            <Link to="/ChartScreen">
             <button>to Chart Page</button>
            </Link> 
            <div>
            <button onClick={handleClickBackStudentPage}>back from Student Page</button>
            <h1>{x}</h1>
            <h1>{x1}</h1>
            <button onClick={handleclick}>change</button>
           </div>  
           <input
           placeholder="name"
           onClick={handleChangeName}
           />
           <h1>{arrName}</h1>
           <h1>{name}</h1>
          
           <button onClick={handleAdd}>Add</button>
     </div>
    )
}
export default AboutScreen;