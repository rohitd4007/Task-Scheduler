import "./Home.css";
import Task from "./Task";
import AddTask from "./AddTask";

function Home() {
  return (
    <>
      <AddTask></AddTask>
      <Task />
    </>
  );
}

export default Home;
