import "./Home.css";
import Task from "./Task";
import AddTask from "./AddTask";

function Home() {
  return (
    <>
      <div className="container">
        <div className="side-bar"></div>
        <div className="main">
          <AddTask></AddTask>
          <Task />
        </div>
      </div>
    </>
  );
}

export default Home;
