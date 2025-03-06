import { useEffect } from "react";
import AppRoutes from "../Routes/Routes"


function App() {
  useEffect(()=>{
    toInit()
  },[])
  function toInit(){
    setTimeout(console.clear(),10000);

    if('maxTouchPoints' in navigator && navigator.maxTouchPoints>0 && window.innerWidth<768){
      let elementosDOM=document.querySelectorAll("*")
      elementosDOM.forEach(element => {
        element.style.cursor="default"
      });
    }
  }
  
  return (
    <div>
        <AppRoutes/>
    </div>
  )
}

export default App

