import {Link,useNavigate} from "react-router-dom";
const RoutNotFoundScreen = () =>{
    const navigate = useNavigate();
    const handleClickme = () =>{
        navigate("/AdminScreen")
    }
    return(
        <div>
            <h1>Page not found</h1>
            <button onClick={handleClickme} >back from admin page</button>
            <Link to="/" ><button>get to Home Page</button></Link>
            {/* <Link to="/AdminScreen" >Admin Page</Link> */}
        </div>
    )
}
export default RoutNotFoundScreen;