import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {useState} from "react";

function App() {

    const [headerChange, setHeaderChange] = useState(false);

    const scrollDown = () => {
        if(window.scrollY >= 200){
            setHeaderChange(true)
        }else{
            setHeaderChange(false)
        }
    }

    window.addEventListener("scroll", scrollDown)

  return (
    <div className="App">
      <Header headerChange={headerChange}/>
        <Main headerChange={headerChange}/>
    </div>
  );
}

export default App;
