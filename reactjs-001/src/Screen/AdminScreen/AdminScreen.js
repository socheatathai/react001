import {Link,useNavigate} from "react-router-dom"
const AdminScreen = () =>{
    var usenaviga = useNavigate();
    var handleClickBackFromChart = ()=>{
        usenaviga("/ChartScreen")
    }
    return(
        <div>
            <h1>AdminScreen</h1>
              <Link to="/RoutNotFoundScreen">
                <button>to Login</button>
            </Link>
            <button onClick={handleClickBackFromChart}>back from chart page</button>
        </div>
    )

}
export default AdminScreen;