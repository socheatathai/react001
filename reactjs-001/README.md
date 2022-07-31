-setup
-Project stucture meaning
-Basic variable display data
-Style internal and external
*Configure route
    >npm install react-router-dom@6
    -import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
    -create page
      scr/screen/subfolder/screen_name.js
    -import all screen use in App.js
    -properties to and element in component Route 
     
                <Route path="/path_name" element={<component_name/>}/>
    -Test route in brower
      http://localhost:3000/route_name
    -Create header link
      <Link className="menu_name" to="/Student">Student</Link>






-Render Data

    -create pages 
      - create folder screen
        -HomeScreen
          +HomeScreen.js
        -StudentScreen
          +StudentScreen.js
        -ChartScreen
          +ChartScreen.js
        -AdminScreen
          +AdminScreen.js
        -AboutScreen
          +AboutScreen.js
        -RoutNotFoundScreen
          +RoutNotFoundScreen.js
