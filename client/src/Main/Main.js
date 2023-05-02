import { useContext } from "react";
import Header from "../Components/HeaderTemplate/Header";
import { ThemeContext } from "../ThemeContext";
import "./Main.css";
import Details from "./Details";
import Card from "./Card";
import Piechaart from "./Piechaart";
const Main = () => {
  const { DarkTheme } = useContext(ThemeContext);

  return (
  <>
    <div className={`main ${DarkTheme && "dark"} headr`}>
      <Header />
      <Details/>
      <div className="ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatum error. Suscipit minus at ratione alias iure corrupti? Dolorem facere, placeat ea deleniti sint et amet praesentium tempora ipsam illum architecto fugiat perferendis delectus? Officia quis deleniti, nulla magni delectus, ab in, nobis eligendi facilis quo maiores velit expedita incidunt tempora eos doloribus exercitationem? Cupiditate,.</div>
    <br/>
    <br/>
    <center>
      <h5 className="text-success">users palyed vs not played</h5>
      <Piechaart/></center>
    </div>
    </> 

  );
};

export default Main;
