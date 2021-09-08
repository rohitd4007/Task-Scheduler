import "./Task.css";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
// import { Link, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import TaskForm from "../Components/TaskForm";

function Task() {
  const tasks = useSelector((state) => state);
  const [showtask, setShowTask] = useState(true);
  const [active, setActive] = useState();

  const createTask = () => {
    setShowTask(!showtask);
  };
  return (
    <>
      {showtask ? <TaskForm /> : ""}

      {tasks.allTasks.task.map((data, index) => (
        <>
          <div key={index} className="task-bar">
            <div className="task-bar-container">
              {"TASKS"}
              <span className="task-count">{index}</span>
            </div>
            <div onClick={() => createTask()} className="add-btn">
              {/* <Router>
                <Link to="/new-task">+</Link>
              </Router> */}
              +
            </div>
          </div>

          <div className="task-title">{data.task_msg}</div>
        </>
      ))}
    </>
  );
}
export default Task;
