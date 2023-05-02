import { useState } from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Admin from "./Components/admin/Admin";
import { ThemeContext } from "./ThemeContext";
import './App.css'
import Logout from "./Components/Auth/Logout";
import Treasureresult from "./Components/level1/Treasureresult";
import Instruction from "./Components/level1/Instruction";
import Teasure from './Components/level1/Teasure'
import SimpleSlider from "./Components/level1/Riddles";
import Image from "./Components/level1/Image";
import Piechaart from "./Main/Piechaart";
function App() {
  const [DarkTheme, setDarkTheme] = useState(true);
  const [cnt,setCnt]=useState({cluecnt:0,anscnt:0});
  const [details,setDetails]=useState({name:'',email:""});
  const [loginTrue,setLoginTrue]=useState(false)
  const [timmer,setTimmer]=useState({hours:0,mins:0,secs:0})
  return (
   <ThemeContext.Provider value={{DarkTheme,setDarkTheme,cnt,setCnt,details,setDetails,loginTrue,setLoginTrue,timmer,setTimmer}}>
      <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/treasure/instruction" element={<Instruction/>}/>
      <Route path="/treasure" element={<Teasure/>}/>
      <Route path="/treasure/result" element={<Treasureresult/>}/>
      <Route path="/chart" element={<Piechaart/>}/>
    </Routes>
    {/* <Details/> */}
      </div>
      </ThemeContext.Provider>
  
  );
}

export default App;
