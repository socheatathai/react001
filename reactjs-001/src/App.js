import React from "react";
import "./App.css";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import AboutScreen from "./Screen/AboutScreen/AboutScreen";
import StudentScreen from "./Screen/StudentScreen/StudentScreen";
import ChartScreen from "./Screen/ChartScreen/ChartScreen";
import AdminScreen from "./Screen/AdminScreen/AdminScreen";
import RoutNotFoundScreen from "./Screen/404.js/RoutNotFoundScreen";

const App = () =>{
    return(
        <div className="App" >
            <BrowserRouter>
            <div className="contain_menu">
                <Link className="menu_item" to="/">Home</Link>
                <Link className="menu_item" to="/StudentScreen">Student</Link>
                <Link className="menu_item" to="/AboutScreen">About</Link>
                <Link className="menu_item" to="/ChartScreen">Chart</Link>
                <Link className="menu_item" to="/AdminScreen" >Admin</Link>
                <Link className="menu_item" to="/login">login</Link>
            </div>
            <div>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/StudentScreen" element={<StudentScreen/>}/>
                <Route path="/AboutScreen" element={<AboutScreen/>}/>
                <Route path="/ChartScreen" element={<ChartScreen/>}/>
                <Route path="/AdminScreen" element={<AdminScreen/>}/>
                <Route path="/*" element={<RoutNotFoundScreen/>} />
            </Routes>
            </div>
            </BrowserRouter>

        </div>
    )
}
export default App;