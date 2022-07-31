import {Link,useNavigate} from  "react-router-dom"
const StudentScreen = ()=>{
    const backHomePage = useNavigate();
    const handleClickBackHomePage = () =>{
        backHomePage("/")
    }
    return(
        <div>
            <h1>StudentScreen</h1>
            <Link to="/AboutScreen">
              <button>to About Page</button>
            </Link> <br></br>
            <button onClick={handleClickBackHomePage}>Back Home Page</button>
        </div>
    )
}
export default StudentScreen;