import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [watchTime, setWatchTime] = useState(0);

  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum);
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };

  return (
    <div>
      <div className="header m-auto mb-3 ">
        <Header></Header>
      </div>
      <div className="main row">
        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
      </div>
      <Contact></Contact>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
